import { Submission } from "../models/index.js";
import { QuestionTypeEnum, SubmissionStatusEnum } from "../types/index.js";

export const checkSubmissions = async () => {
    console.log('running a task every minute', Date.now());

    const submissions = await Submission.find({
        status: SubmissionStatusEnum.SUBMITTED
    }).populate("assesmentId");

    let marksAwarded = 0;


    for (const submission of submissions) {
        const { questions } = submission.assesmentId;
        const { answers } = submission;

        for (const answer of answers) {
            let { questionId, response } = answer;

            const question = questions.find(q => q._id.toString() === questionId.toString());

            if (!question) {
                console.log('question not found');
                continue;
            }

            switch (question.type) {
                case QuestionTypeEnum.MULTIPLE_CHOICE_QUESTION:
                    const correctAnswer = (question.options ?? []).find(opt => opt.isCorrect);

                    if (correctAnswer.label === response) {
                        marksAwarded += question.marks;
                    }
                    break;

                case QuestionTypeEnum.LONG_ANSWER_QUESTION:
                    break;
                case QuestionTypeEnum.SHORT_ANSWER_QUESTION:
                    break;
                default:
                    break;
            }
        }
    }

    console.log('marksAwarded:', marksAwarded);
}

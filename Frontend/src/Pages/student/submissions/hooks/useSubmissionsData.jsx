import { useNavigate } from "react-router-dom";
import { useDeleteSubmissionMutation, useGetAllSubmissionsQuery } from "../../../../Store/feature/submissions/api";
import { AssesmentStatusEnum, SubmissionStatusEnum } from "../../../../../../Backend/types/index";
import { getRowIcon } from "../utils/index";
import { Trash2 } from "lucide-react";

export function useSubmissionsData() {
    const navigate = useNavigate();
    const { data = [] } = useGetAllSubmissionsQuery(undefined, {
        pollingInterval: 1000 * 60,
        refetchOnFocus: true
    });
    const [triggerDelete, { isLoading }] = useDeleteSubmissionMutation();

    const rows = data.map((submission) => ({
        ...submission,
        id: submission._id,
        assesment: submission.assesmentId?.title,
        score: submission.status === AssesmentStatusEnum.COMPLETED ? (
            <p>{submission.totalMarks} / {submission.maxMarks}</p>
        ) : (
            "-"
        )
    }))


    const actions = [
        {
            icon: (row) => getRowIcon(row.status),
            onClick: async (row) => {
                if (row.status === SubmissionStatusEnum.COMPLETED) {
                    navigate(`/student/submissions/${row._id}`);
                } else {
                    navigate(`/student/assesments/${row.assesmentId._id}?submissionId=${row._id}`);
                }
            }
        },
        {
            icon: <Trash2 size={20} className="text-red-500" />,
            onClick: async (row) => {
                if(isLoading) return;
                triggerDelete(row._id);
            }
        }
    ]

    return { rows, actions, isLoading }
}

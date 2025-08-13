
function QuestionBreakdown({ data }) {
    const questions = data?.assesmentId?.questions ?? [];

    return (
        <div className="h-auto">
            <h2 className="text-lg font-semibold mt-3">QuestionBreakdown</h2>

            <div className="flex flex-col gap-2">
                {
                    questions.map((que, index) => (
                        <div key={index} className="border p-4 rounded truncate">
                            Q{index+1}. {que.question}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default QuestionBreakdown

import { EyeIcon, FilePenLine } from "lucide-react"
import { SubmissionStatusEnum } from "../../../../../../Backend/types/index"

export const getRowIcon = status => {
    
    switch(status) {
        case SubmissionStatusEnum.SUBMITTED :
        case SubmissionStatusEnum.COMPLETED :
            return <EyeIcon size={20} className="text-blue-500" />
        case SubmissionStatusEnum.IN_PROGRESS :
            return <FilePenLine size={20} className="text-green-500" />
        default :
            return null;
    }
}

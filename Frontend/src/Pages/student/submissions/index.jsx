import { useEffect } from "react";

import { useHeading } from "../../../Hooks"
import CustomTable from "../../../Components/Common/CustomTable";
import { useSubmissionsData } from "./hooks";
import { submissionsColumns } from "./utils";

import { RotateCw } from "lucide-react";


function StudentSubmissionsPage() {
    const { setHeading, setSubHeading } = useHeading();

    useEffect(() => {
        setHeading('Submissions');
        setSubHeading('View all your submissions here');
    }, [])

    const { rows, actions, isLoading } = useSubmissionsData();

    const loaderPositionStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: isLoading ? 'block' : 'none'
    }

    return (
        <div className={`max-h-full relative overflow-auto bg-white opacity-${isLoading ? '50' : '100'}`}>
            <div style={loaderPositionStyle}>
                <RotateCw size={60} className="animate-spin text-gray-500" />
            </div>
            <div>
                <CustomTable
                    columns={submissionsColumns}
                    data={rows}
                    actions={actions}
                    shouldShowActions={true}
                />
            </div>
        </div>
    )
}

export default StudentSubmissionsPage

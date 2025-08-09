import { useEffect } from "react"
import {useNavigate} from 'react-router-dom'

import { useHeading } from "../../../Hooks"

function StudentDashboard() {
    const { setHeading, setSubHeading } = useHeading();
    const navigate = useNavigate();

    useEffect(() => {
        setHeading("Dashboard");
        setSubHeading("Student dashbord is here");
    }, [])

    return (
        <div>
            <div>Student dashboard</div>
        </div>
    )
}

export default StudentDashboard

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

import { SidebarTopElements } from "./Utils/SidebarTopElement"
import SidebarElement from "./SidebarElement"
import SidebarButton from "./SidebarButton"
import { commonSelector } from '../../../Store/feature/common/selectors';
import { toggleSidebar } from '../../../Store/feature/common/commonSlice';


function StudentSidebar() {
    const { isSidebarOpen } = useSelector(commonSelector);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const collpaseSidebarHandler = () => {
        dispatch(
            toggleSidebar(!isSidebarOpen)
        )
    }

    return (
        <div className='h-full w-full border-r flex flex-col'>
            
            <div onClick={() => navigate("/")} className={`${isSidebarOpen ? "pl-2" : "p-0 justify-center"} h-16 w-full border-b flex items-center cursor-pointer`}>
                <img
                    src='../../../quizzy_logo/quizzy_logo.png'
                    alt="Quizzy logo"
                    className="max-h-full"
                />
                <div className={`text-3xl font-bold ${isSidebarOpen ? '' : 'hidden'}`}>Quizzy</div>
            </div>

            <div className="flex-col p-2 border-b">
                {
                    SidebarTopElements.map((elm) => <SidebarElement key={elm.label} {...elm} />)
                }
            </div>

            <div className='flex-1 border-b'></div>

            <div className="p-2">
                <SidebarButton onclick={collpaseSidebarHandler} icon={isSidebarOpen ? <ChevronLeft /> : <ChevronRight />} label='Collapse' />
            </div>
        </div>
    )

}

export default StudentSidebar

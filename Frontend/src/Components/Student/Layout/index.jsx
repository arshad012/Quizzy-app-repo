import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import StudentSidebar from '../Sidebar';
import { commonSelector } from '../../../Store/feature/common/selectors';
import Header from '../Header';

import '../../../App.css';

function StudentLayout() {
    const { isSidebarOpen } = useSelector(commonSelector);

    return (
        <div className='h-screen w-screen flex'>
            <aside className={`${isSidebarOpen ? 'w-52' : 'w-15'} h-full`}>
                <StudentSidebar />
            </aside>

            <main className='flex-1 flex flex-col h-full overflow-auto bg-white'>
                <Header />
                <div className='student-layout p-2 bg-white overflow-auto'>
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

export default StudentLayout

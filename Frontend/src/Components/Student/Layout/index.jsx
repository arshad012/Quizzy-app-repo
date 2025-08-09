import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import StudentSidebar from '../Sidebar';
import { commonSelector } from '../../../Store/feature/common/selectors';
import Header from '../Header';

function StudentLayout() {
    const { isSidebarOpen } = useSelector(commonSelector);

    return (
        <div className='h-screen w-screen flex'>
            <aside className={`${isSidebarOpen ? 'w-52' : 'w-15'} h-full`}>
                <StudentSidebar />
            </aside>

            <main className='flex-1 flex flex-col overflow-auto h-full'>
                <Header />
                <div className='p-2 flex-1 h-[calc(100vh-200px)]'>
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

export default StudentLayout

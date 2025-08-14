import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import StudentSidebar from '../Sidebar';
import { commonSelector } from '../../../Store/feature/common/selectors';
import Header from '../Header';


function StudentLayout() {
    const { isSidebarOpen } = useSelector(commonSelector);

    return (
        <div className='h-[100dvh] w-screen flex'>
            <aside className={`${isSidebarOpen ? 'w-52' : 'w-15'} h-full transition-all`}>
                <StudentSidebar />
            </aside>

            <main className='flex-1 flex flex-col bg-white'>
                <div className='h-16'>
                    <Header />
                </div>
                <div className='flex-1 p-2 bg-white overflow-auto'>
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

export default StudentLayout

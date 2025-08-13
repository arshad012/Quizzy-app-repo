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

            <main className='flex-1 flex flex-col h-full bg-white'>
                <div className='h-1/10'>
                    <Header />
                </div>
                <div className='max-h-[calc(100vh_-_10vh)] min-h-auto flex-1 p-2 bg-white overflow-auto'>
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

export default StudentLayout

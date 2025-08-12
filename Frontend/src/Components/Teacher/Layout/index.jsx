import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TeacherSidebar from '../Sidebar';
import { commonSelector } from '../../../Store/feature/common/selectors';
import Header from '../Header';

import '../../../App.css';

function TeacherLayout() {
    const { isSidebarOpen } = useSelector(commonSelector);

    return (
        <div className='h-screen w-screen flex'>
            <aside className={`${isSidebarOpen ? 'w-52' : 'w-15'} h-full`}>
                <TeacherSidebar />
            </aside>

            <main className='flex-1 overflow-auto'>
                <Header />
                <div className='teacher-layout p-2'>
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

export default TeacherLayout

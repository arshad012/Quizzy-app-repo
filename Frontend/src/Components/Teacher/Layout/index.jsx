import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TeacherSidebar from '../Sidebar';
import { commonSelector } from '../../../Store/feature/common/selectors';
import Header from '../Header';


function TeacherLayout() {
    const { isSidebarOpen } = useSelector(commonSelector);

    return (
        <div className='h-screen w-screen flex'>
            <aside className={`${isSidebarOpen ? 'min-w-52 w-52' : 'w-15'} h-full`}>
                <TeacherSidebar />
            </aside>

            <main className='flex-1 flex flex-col h-full bg-white overflow-auto'>
                <div className='h-16'>
                    <Header />
                </div>
                <div className='max-h-[calc(100vh_-_16)] flex-1 p-2 bg-white overflow-x-auto'> {/*  */}
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

export default TeacherLayout

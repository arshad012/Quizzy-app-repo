import { createElement, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { teacherRoutes, studentRoutes } from './routes';
import Loading from './Components/Common/Loading';
const NotFound = lazy(() => import('./Pages/notFound'));
const Home = lazy(() => import('./Pages/teacher/Home'));

const TeacherLayout = lazy(() => import('./Components/Teacher/Layout'));
const StudentLayout = lazy(() => import('./Components/Student/Layout'));

const generateRouteComponent = route => {
  const { path, element } = route;

  return <Route
    key={path}
    path={path}
    element={
      <Suspense fallback={<Loading />}>
        {createElement(lazy(element))}
      </Suspense>
    }
  />
}


function App() {

  return (
    <Suspense fallback={<Loading />} >
      <Router>

        <Routes>
          <Route path='/' element={<Home />} />

          {/* Teacher Routes */}
          <Route element={<TeacherLayout />} >
            {
              teacherRoutes.map(route => generateRouteComponent(route))
            }
          </Route>

          {/* Student Routes */}
          <Route element={<StudentLayout />}>
            {
              studentRoutes.map(route => generateRouteComponent(route))
            }
          </Route>

          <Route path='*' element={<NotFound />} />
        </Routes>

      </Router>
    </Suspense>
  )
}

export default App

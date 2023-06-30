import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  RouterProvider,
} from 'react-router-dom';
import ErrorPage from '../404.tsx';
import Home from '../page/home/index.tsx';
import Theme from '../page/theme/index.tsx';
import Article from '../page/home/article/index.tsx';
import Login from '../page/login/index.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login></Login>,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: '/home',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: '/theme',
    element: <Theme></Theme>,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: '/404',
    element: <div>这里什么也没有......你可能走错路了</div>
  }
])


export default router
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/reset.css';
import RoutesRoot from './routes/root.tsx';
import ErrorPage from './404.tsx';
import Home from './page/home/index.tsx';
import App from './App.tsx'
import './main.less'
import './common.less'

import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RoutesRoot></RoutesRoot>,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: '/home',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: '/404',
    element: <div>这里什么也没有......你可能走错路了</div>
  }
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <App />
  </React.StrictMode>,
)

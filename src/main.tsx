import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/reset.css';
import RoutesRoot from './routes/root.tsx';
import ErrorPage from './404.tsx'

import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:'/',
    element: <RoutesRoot></RoutesRoot>,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path:'/404',
    element: <div>这里什么也没有......你可能走错路了</div>
  }
])

import App from './App.tsx'
import './index.css'
import './main.less'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <App />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/reset.css';

import App from './App.tsx'
import './index.css'
import './main.less'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

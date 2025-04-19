import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {createBrowserRouter, Route, RouterProvider} from 'react-router-dom'

//Pages
import Home from './router/Home.jsx'
import Countdown from './router/Countdown.jsx'

// Context
import { CountdownProvider } from './context/CountdownContext.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/countdown",
        element: <Countdown />,
      },
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountdownProvider>
    <RouterProvider router={router} />
    </CountdownProvider>
  </StrictMode>,
)

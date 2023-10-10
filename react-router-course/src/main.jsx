import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout.jsx'
import { About, Home , Contact, User, Github  } from './components/index.js'
import { gitubInfo } from './components/index.js'

const router = createBrowserRouter([

  {
    path : '/',
    element : <Layout/>,
    children : [
      {
        path : '',
        element : <Home/>
      },
      {
        path : 'about',
        element : <About/>
      },
      {
        path : 'contact-us',
        element : <Contact/>
      },
      {
        path : 'user/:id',
        element : <User/>
      },
      {
        loader : gitubInfo,
        path : 'github',
        element : <Github/>
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

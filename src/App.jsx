import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Contact from './Components/contact'
import Home from './Components/Home'

function App() {


  let Router = createBrowserRouter([
    {
      path: "", element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: "Home", element: <Home /> },
        { path: "About", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={Router} />


    </>
  )
}

export default App

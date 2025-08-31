import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
// import Books from './assets/pages/Books';
// import Cart from './assets/pages/Cart';
// import Login from './assets/pages/Login';


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />
//   },

//   {
//     path: '/books/:category',
//     element: <Books />
//   },

//   {
//     path: '/books',
//     element: <Books />
//   },

//   {
//     path: '/cart-page',
//     element: <Cart />
//   },

//   {
//     path: '/login-page',
//     element: <Login />
//   }
  

// ])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </StrictMode>,
)

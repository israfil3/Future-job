import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blog from './component/Blog/Blog';
import Hero from './component/Hero/Hero';
import Loder from './component/LodeData/Loder';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[
        {
          path:"/",
         element:<Hero></Hero>
        },
        {
          path: "/",
        },
        {
          path:"Blog",
          element:<Blog></Blog>
        }
  ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

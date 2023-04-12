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
import Company from './component/Company/Company';
import Loader from './loader/Loader';
import Err from './err/Err';
import NewBtn from './component/newBtn/NewBtn';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    errorElement:<Err></Err>,
    children:[
        {
          path:"/",
          element:<Hero></Hero>,
          loader:()=> fetch(`/data.json`)
        },
        {
          path:"Home",
          element:<Hero></Hero>
        },
        {
          path:"/:idd",
          element:<NewBtn></NewBtn>,
          loader:()=> fetch(`/data.json`)
        },
        {
          path:"Blog",
          element:<Blog></Blog>
        },
        {
          path:"Statistics",
          element:<Loader></Loader>
        },
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

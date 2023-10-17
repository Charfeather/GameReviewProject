import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Shooter from './Shooter';
import Mmorpg from './Mmorpg'
import Form from './components/Form';
import OpenWorldComponent from './Openworld';

const routes=[
  {
  path:"/",
  element:<App />
},{
  path:"/shooter-reviews",
  element:<Shooter />
},{
  path:"/mmo-reviews",
  element:<Mmorpg />
},{
  path:"/open-world-reviews/",
  element:<OpenWorldComponent/>
},
{
  path:"/form",
  element: <Form />
}
]
const router=createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Component from './constants/Component';
import './style/App.scss';
import VenderContext from './context/Store';
import { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { apiheader } from './utils/fetchData';
import ChatStore from './context/ChatStore';

function App() {


  const baseURL = 'https://cureclinckapi.amlakturks.com/public/api/';


  function ProtectedRoutes({ children }) {
    if (localStorage.getItem('token')) {
      return children
    } else {
      return <Navigate to="/auth/login" replace={true} />
    }
  }
  const root = createBrowserRouter([
    {
      path: '/', element: <Component.Vendor />, children: [
        { index: true, element: <ProtectedRoutes>  <Component.Users /></ProtectedRoutes> },
        {
          path: '/user', children: [
            { index: true, element: <ProtectedRoutes>  <Component.Users /> </ProtectedRoutes> },
            { path: 'addUser', element: <ProtectedRoutes> <Component.AddNewUser /></ProtectedRoutes> },
            { path: 'editUser/:id', element: <ProtectedRoutes>  <Component.Edit /> </ProtectedRoutes> },

          ]
        }, 
        {
          path: '/section2', children: [
            { index: true, element: <ProtectedRoutes>  <Component.Sec2 baseURL={baseURL} /> </ProtectedRoutes> },
            { path: 'add', element: <ProtectedRoutes> <Component.AddSec2 baseURL={baseURL} /></ProtectedRoutes> },
            { path: 'edit/:id', element: <ProtectedRoutes>  <Component.EditSec2 baseURL={baseURL} /> </ProtectedRoutes> },
          ]
        }, 
      ],
    },

 

    {
      path: '/auth/', element: <Component.Auth />, children: [
        { path: 'login', element: <Component.Login /> },
      ]
    }

  ])
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            fontFamily: ' Arial, Helvetica, sans-serif',
            textTransform: 'capitalize',
            zIndex: '9999',
            background: '#fff',
            color: '#000',
          },
        }}
        containerStyle={{
          top: 60
        }}
      />
      <ChatStore>
        <VenderContext>
          <RouterProvider router={root} />
        </VenderContext>
      </ChatStore>

    </>
  );
}

export default App;


// shazly
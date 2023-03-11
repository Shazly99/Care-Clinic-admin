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
  const URL_Doctors = `https://bytrh.com/api/admin/doctors`;
  let token = localStorage.getItem('token')
  const [pagesCountDoctors, setPagesCountDoctors] = useState(0);
  const [countDoctors, setCountDoctors] = useState(1);
  const [searchKeyDoctors, setSearchKeyDoctors] = useState(null);
  const [loadingDoctors, setLoadingDoctors] = useState(false)
  const [fetchDoctors, setFetchDoctors] = useState([])

  async function getTokenDoctors() {

    setLoadingDoctors(true);
    await axios.post(URL_Doctors, {
      IDPage: countDoctors,
      SearchKey: searchKeyDoctors
    }, apiheader)
      .then(res => {
        setFetchDoctors(res.data.Response.Doctors);
        setPagesCountDoctors(res.data.Response.Pages);
        setLoadingDoctors(false);
      })
      .catch((error) => {
        console.log(error)
      });
  }
  useEffect(() => {
    if (token) {
      getTokenDoctors();
    }
  }, [token, countDoctors, pagesCountDoctors, searchKeyDoctors]);

  // get countries Bytra
  const [fetchCountriesBytra, setFetchCountriesBytra] = useState([]);
  async function getCountriesBytra() {
    await axios.get(`https://bytrh.com/api/doctor/countries`)
      .then(res => {
        if (res.status === 200 && res.request.readyState === 4) {
          setFetchCountriesBytra(res.data.Response.Countries);
        }
      })
      .catch(err => {
        console.log(err);
      })
  }
  useEffect(() => {
    getCountriesBytra();
  }, [])


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
        // rashed
        {
          path: '/section2', children: [
            { index: true, element: <ProtectedRoutes>  <Component.Sec2 baseURL={baseURL} /> </ProtectedRoutes> },
            { path: 'add', element: <ProtectedRoutes> <Component.AddSec2 baseURL={baseURL} /></ProtectedRoutes> },
            { path: 'edit/:id', element: <ProtectedRoutes>  <Component.EditSec2 baseURL={baseURL} /> </ProtectedRoutes> },
          ]
        }, 
        {
          path: '/brand', children: [
            { index: true, element: <ProtectedRoutes>  <Component.Brand /> </ProtectedRoutes> },
            { path: 'addbrand', element: <ProtectedRoutes> <Component.AddBrand /></ProtectedRoutes> },
            { path: 'editbrand/:id', element: <ProtectedRoutes>  <Component.EditBrand /> </ProtectedRoutes> },

          ]
        },

        {
          path: '/contactus', children: [
            { index: true, element: <ProtectedRoutes>  <Component.Contactus /> </ProtectedRoutes> },
            { path: 'addcontactus', element: <ProtectedRoutes> <Component.AddContactus /></ProtectedRoutes> },
            { path: 'editcontactus/:id', element: <ProtectedRoutes>  <Component.EditContactus /> </ProtectedRoutes> },

          ]
        },

        {
          path: '/section1', children: [
            { index: true, element: <ProtectedRoutes>  <Component.Sec1 /> </ProtectedRoutes> },
            { path: 'addsection1', element: <ProtectedRoutes> <Component.AddSec1 /></ProtectedRoutes> },
            { path: 'editsection1/:id', element: <ProtectedRoutes>  <Component.EditSec1 /> </ProtectedRoutes> },

          ]
        },

        {
          path: '/section3', children: [
            { index: true, element: <ProtectedRoutes>  <Component.Sec3 /> </ProtectedRoutes> },
            { path: 'addsection3', element: <ProtectedRoutes> <Component.AddSec3 /></ProtectedRoutes> },
            { path: 'editsection3/:id', element: <ProtectedRoutes>  <Component.EditSec3 /> </ProtectedRoutes> },

          ]
        },

        {
          path: '/section4', children: [
            { index: true, element: <ProtectedRoutes>  <Component.Sec4 /> </ProtectedRoutes> },
            { path: 'addsection4', element: <ProtectedRoutes> <Component.AddSec4 /></ProtectedRoutes> },
            { path: 'editsection4/:id', element: <ProtectedRoutes>  <Component.EditSec4 /> </ProtectedRoutes> },

          ]
        },


        // 
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
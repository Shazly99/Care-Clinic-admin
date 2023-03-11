import React, { useEffect, useState } from 'react'
import Component from '../../../constants/Component'
import '../Sec2/Sec2.scss'
import Icons from "../../../constants/Icons.js";
import { apiheader } from '../../../utils/fetchData';
import axios from 'axios';


function Sec5({baseURL}) {

  let listURL = `${baseURL}getsliders`;
  const [loading, setLoading] = useState(false);
  const [usersList, setuserList] = useState([]);

  const getList = async () => {
    setLoading(true);
    await axios.get(listURL, {}, apiheader)
      .then(res => {
        setuserList(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error)
      });
  }
  useEffect(() => {
    getList()
  }, [])




  return (
    <>
      {
        !loading ?
          <>
            <div className="app__Users ">
              <Component.ButtonBase title={"Add  "} bg={"primary"} icon={<Icons.add size={21} color={'#ffffffb4'} />} path="/slider/add" />

              <div className="app__Users-table">
                <Component.SliderTable usersList={usersList} getList={getList} baseURL={baseURL} />
              </div>
            </div>
          </> : <Component.Loader />
      }
    </>
  )
}

export default Sec5


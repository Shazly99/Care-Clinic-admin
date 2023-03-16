import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { GetData } from '../../../../utils/fetchData';
import Icons from '../../../../constants/Icons'; 

export default function EditStaff() {
  let { id } = useParams()
  let navigate = useNavigate();

  let BASE_URL = 'https://cureclinckapi.amlakturks.com/public/api/'
  const nameReq = useRef();
  const desc = useRef();
  const images = useRef();

  const [editPage, setgetSec] = useState(null)

  const submit = e => {
    e.preventDefault()
    editSec({
      Namereq: nameReq.current.value,
      Desc: desc.current.value,
      images: images.current.files[0],
      ID: id
    })
  }

  async function editSec(update) {
    await axios.post(`${BASE_URL}Updatesection2`, update).then((res) => {

      if (res.data.message === "success") {
        toast.success('updated successfully!', {
          duration: 4000,
          position: 'top-center',
          icon: <Icons.upload color='#40AB45' size={25} />,
          iconTheme: {
            primary: '#0a0',
            secondary: '#fff',
          },
        });
        setTimeout(() => {
          navigate('/section2');
        }, 500);
      } else {
        toast.error(res.data.message)
      }
    });
  }
  const diplayUserData = async () => {
    let { data } = await GetData(`${BASE_URL}Getsection2ByID?ID=${id}`)
    setgetSec(data.data);
    console.log(data.data);
  }
  useEffect(() => {
    diplayUserData()
    console.log(id);
  }, [id])
  return (
    <div>EditStaff</div>
  )
}


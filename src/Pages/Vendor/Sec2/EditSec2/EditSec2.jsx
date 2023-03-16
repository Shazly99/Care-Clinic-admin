import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import 'react-phone-input-2/lib/style.css';
import { useNavigate, useParams } from 'react-router-dom';
import Icons from '../../../../constants/Icons';
import { GetData } from '../../../../utils/fetchData';
import axios from 'axios';

const EditSec2 = () => {
    let { id } = useParams()
    let navigate = useNavigate();
  
    let BASE_URL = 'https://cureclinckapi.amlakturks.com/public/api/'
  
    const title = useRef();
    const body = useRef();
    const image = useRef();
    const lang = useRef();
  
    const [editPage, setgetSec] = useState(null)
  
    const submit = e => {
      e.preventDefault()
      editSec({
        Body: body.current.value,
        images: image.current.files[0],
        Title: title.current.value,
        Lang: lang.current.value,
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
        <>
       EditSec2
        </>
    )
}

export default EditSec2

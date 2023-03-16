import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Component from '../../../constants/Component';
import { Container, Form, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import Icons from '../../../constants/Icons';
import { Link } from 'react-router-dom';
import { GetData } from '../../../utils/fetchData';

const EditSec4 = () => {
  let { id } = useParams()
  let navigate = useNavigate();

  let BASE_URL = 'https://cureclinckapi.amlakturks.com/public/api/'
  const LangRef = useRef(null);
  const VideoURLRef = useRef(null);
  const TitleRef = useRef(null);
  const bodyRef = useRef(null);

  const [editPage, setgetSec] = useState(null)

  const submit = e => {
    e.preventDefault()
    editSec({
      Lang: LangRef.current.value,
      //   VideoURL: VideoURLRef.current.value,
      Title: TitleRef.current.value,
      body: bodyRef.current.value,
      ID: id
    })
  }

  async function editSec(update) {
    await axios.post(`${BASE_URL}Updatesection4`, update).then((res) => {

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
          navigate('/section4');
        }, 500);
      } else {
        toast.error(res.data.message)
      }
    });
  }
  const diplayUserData = async () => {
    let { data } = await GetData(`${BASE_URL}Getsection4ByID?ID=${id}`)
    setgetSec(data.data);
    console.log(data.data);
  }
  useEffect(() => {
    diplayUserData()
    console.log(id);
  }, [id])
  return (
    <Container fluid>
    <div className="app__addprodects">
    <Component.SubNav sub__nav={[{ name: " Section 4 ", path: '/section4' }, { name: "Edit Item", path: `/section4/editsection4/${id}` }]} />

        <div className="app__addprodects__header ">
            <Component.BaseHeader h1={'Add New Ads'} />
            <div className="app__addOrder-form">

                <div className="app__addprodects-form">
                    <form onSubmit={submit}>


                        <Row>
                            <Col xl={6} lg={6} md={6} sm={12} className="app__addprodects-form-en">

                                <Form.Group controlId="formBasicEmail" className='mt-3'>
                                    <Form.Label>Lang</Form.Label>
                                    <Form.Select aria-label="Default select example" ref={LangRef} >
                                        {
                                            [{ id: 1, lang: 'Arabic' }, { id: 2, lang: 'English' }, { id: 3, lang: 'French' }, { id: 4, lang: 'Russian' }, { id: 5, lang: 'Turkish' }]?.map((item, index) => (
                                                <option key={index} value={item.id} selected={Number(editPage?.Lang) === Number(item.id)  && item.lang } >{item.lang}</option>
                                            ))
                                        }
                                    </Form.Select>
                                </Form.Group> 

                                <Form.Group controlId="formBasicEndDate" className='mt-3'>
                                    <Form.Label>Title</Form.Label>
                                    <InputGroup>
                                        <FormControl type="text" ref={TitleRef} defaultValue={editPage?.Title}/>
                                    </InputGroup>
                                </Form.Group>

                            </Col>

                            <Col xl={6} lg={6} md={6} sm={12} className="app__addprodects-form-en">

                                <Form.Group controlId="formBasicEndDate" className='mt-3'>
                                    <Form.Label>body</Form.Label>
                                    <InputGroup>
                                        <FormControl type="text" ref={bodyRef} defaultValue={editPage?.Title}/>
                                    </InputGroup>
                                </Form.Group>




                            </Col>
                            <div className='d-flex justify-content-center align-content-center my-5'>

                                <div className='baseBtn1'>
                                    <Button type='submit' variant={'primary'} className='d-flex align-items-center justify-content-center'>
                                        Save
                                    </Button>
                                </div>

                                <div className='baseBtn'>
                                    <Link to={'/section4'}>
                                        <Button variant={'primary'} className='d-flex align-items-center justify-content-center'>
                                            Cancel
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </Row>

                    </form>
                </div>
            </div>
        </div>
    </div>
</Container >
  )
}

export default EditSec4

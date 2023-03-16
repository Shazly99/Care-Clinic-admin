import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Component from '../../../constants/Component';
import { Container, Form, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import Icons from '../../../constants/Icons';
import { Link } from 'react-router-dom';
import { GetData } from '../../../utils/fetchData';

const EditSec3 = () => {
  let { id } = useParams()
  let navigate = useNavigate();

  let BASE_URL = 'https://cureclinckapi.amlakturks.com/public/api/'
  const LangRef = useRef(null);
  const PTitleRef = useRef(null);
  const PbodyRef = useRef(null); 
  const LTitleRef = useRef(null);
  const LBodyRef = useRef(null);
  const BATitleRef = useRef(null); 
  const BABodyRef = useRef(null); 

  const [editPage, setgetSec] = useState(null)

  const submit = e => {
    e.preventDefault()
    editSec({
      Lang: LangRef.current.value,
      PTitle: PTitleRef.current.value,
      Pbody: PbodyRef.current.value, 
      LTitle: LTitleRef.current.value,
      LBody: LBodyRef.current.value,
      BATitle: BATitleRef.current.value, 
      BABody: BABodyRef.current.value, 
      ID: id
    })
  }

  async function editSec(update) {
    await axios.post(`${BASE_URL}Updatesection3`, update).then((res) => {

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
          navigate('/section3');
        }, 500);
      } else {
        toast.error(res.data.message)
      }
    });
  }
  const diplayUserData = async () => {
    let { data } = await GetData(`${BASE_URL}Getsection3ByID?ID=${id}`)
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
        <Component.SubNav sub__nav={[{ name: " Section 3 ", path: '/section3' }, { name: "Edit Item", path: `/section3/editsection3/${id}` }]} />

        <div className="app__addprodects__header ">
            <Component.BaseHeader h1={'Edit Section 3'} />
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
                                                <option key={index} value={item.id}   selected={Number(editPage?.Lang) === Number(item.id)  && item.lang }  >{item.lang}</option>
                                            ))
                                        }
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group controlId="formBasicEndDate" className='mt-3'>
                                    <Form.Label>PTitle</Form.Label>
                                    <InputGroup>
                                        <FormControl type="text" ref={PTitleRef} defaultValue={editPage?.PTitle}/>
                                    </InputGroup>
                                </Form.Group>


                                <Form.Group controlId="formBasicEndDate" className='mt-3'>
                                    <Form.Label>Pbody</Form.Label>
                                    <InputGroup>
                                        <FormControl type="text" ref={PbodyRef} defaultValue={editPage?.Pbody}/>
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group controlId="formBasicEndDate" className='mt-3'>
                                    <Form.Label>BABody</Form.Label>
                                    <InputGroup>
                                        <FormControl type="text" ref={BABodyRef} defaultValue={editPage?.BABody}/>
                                    </InputGroup>
                                </Form.Group> 

                            </Col>

                            <Col xl={6} lg={6} md={6} sm={12} className="app__addprodects-form-en">
                                <Form.Group controlId="formBasicEndDate" className='mt-3'>
                                    <Form.Label>LTitle</Form.Label>
                                    <InputGroup>
                                        <FormControl type="text" ref={LTitleRef} defaultValue={editPage?.LTitle}/>
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group controlId="formBasicEndDate" className='mt-3'>
                                    <Form.Label>LBody</Form.Label>
                                    <InputGroup>
                                        <FormControl type="text" ref={LBodyRef} defaultValue={editPage?.LBody}/>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group controlId="formBasicEndDate" className='mt-3'>
                                    <Form.Label>BATitle</Form.Label>
                                    <InputGroup>
                                        <FormControl type="text" ref={BATitleRef} defaultValue={editPage?.BATitle}/>
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
                                    <Link to={'/section3'}>
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

export default EditSec3
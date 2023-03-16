import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Component from '../../../constants/Component';
import { Container, Form, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import Icons from '../../../constants/Icons';
import { Link } from 'react-router-dom';
import { GetData } from '../../../utils/fetchData';

const EditContactus = () => {
  let { id } = useParams()
  let navigate = useNavigate();

  let BASE_URL = 'https://cureclinckapi.amlakturks.com/public/api/'
  const LangRef = useRef(null);
  const LongitRef = useRef(null);
  const LatRef = useRef(null);
  const CitycountryRef = useRef(null);
  const addressRef = useRef(null);
  const footerHeadRef = useRef(null);
  const footerBodyRef = useRef(null);
  const footerTextRef = useRef(null);
  const EmailRef = useRef(null);
  const PhoneRef = useRef(null);
  const whatsappRef = useRef(null);
  const MessengerRef = useRef(null);

  const [editPage, setgetSec] = useState(null)

  const submit = e => {
    e.preventDefault()
    editSec({
      Lang: LangRef.current.value,
      Longit: LongitRef.current.value,
      Lat: LatRef.current.value,
      Citycountry: CitycountryRef.current.value,
      address: addressRef.current.value,
      footerHead: footerHeadRef.current.value,
      footerBody: footerBodyRef.current.value,
      footerText: footerTextRef.current.value,
      Email: EmailRef.current.value,
      Phone: PhoneRef.current.value,
      whatsapp: whatsappRef.current.value,
      Messenger: MessengerRef.current.value,
      ID: id
    })
  }

  async function editSec(update) {
    await axios.post(`${BASE_URL}Updatecontactus`, update).then((res) => {

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
          navigate('/contactus');
        }, 500);
      } else {
        toast.error(res.data.message)
      }
    });
  }
  const diplayUserData = async () => {
    let { data } = await GetData(`${BASE_URL}GetcontactusByID?ID=${id}`)
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
        <Component.SubNav sub__nav={[{ name: " Contact Us", path: '/contactus' }, { name: "Edit Contact Us  ", path: `/contactus/editcontactus/${id}` }]} />

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
                                                <option key={index} value={item.id}  selected={editPage?.Lang === item.id && item.lang }  >{item.lang}</option>
                                            ))
                                        }
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group controlId="formBasicEndDate" className='mt-3'>
                                    <Form.Label>Longit</Form.Label>
                                    <InputGroup>
                                        <FormControl type="text" ref={LongitRef} defaultValue={editPage?.Longit} />
                                    </InputGroup>
                                </Form.Group> 

                                <Form.Group controlId="formBasicEndDate" className='mt-3'>
                                    <Form.Label>Lat</Form.Label>
                                    <InputGroup>
                                        <FormControl type="text" ref={LatRef} defaultValue={editPage?.Lang}/>
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group controlId="formBasicEndDate" className='mt-3'>
                                    <Form.Label>City country</Form.Label>
                                    <InputGroup>
                                        <FormControl type="text" ref={CitycountryRef} defaultValue={editPage?.Citycountry}/>
                                    </InputGroup>
                                </Form.Group>


                                <Form.Group controlId="formBasicEndDate" className='mt-3'>
                                    <Form.Label>address</Form.Label>
                                    <InputGroup>
                                        <FormControl type="text" ref={addressRef} defaultValue={editPage?.address}/>
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group controlId="formBasicEndDate" className='mt-3'>
                                    <Form.Label>footerHead</Form.Label>
                                    <InputGroup>
                                        <FormControl type="text" ref={footerHeadRef}defaultValue={editPage?.footerHead} />
                                    </InputGroup>
                                </Form.Group>




                            </Col>

                            <Col xl={6} lg={6} md={6} sm={12} className="app__addprodects-form-en">

                            <Form.Group controlId="formBasicEndDate" className='mt-3'>
                                    <Form.Label>footerBody</Form.Label>
                                    <InputGroup>
                                        <FormControl type="text" ref={footerBodyRef} defaultValue={editPage?.footerBody}/>
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group controlId="formBasicEndDate" className='mt-3'>
                                    <Form.Label>footerText</Form.Label>
                                    <InputGroup>
                                        <FormControl type="text" ref={footerTextRef} defaultValue={editPage?.footerText}/>
                                    </InputGroup>
                                </Form.Group>


                                <Form.Group controlId="formBasicEndDate" className='mt-3'>
                                    <Form.Label>Email</Form.Label>
                                    <InputGroup>
                                        <FormControl type="email" ref={EmailRef} defaultValue={editPage?.Email}/>
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group controlId="formBasicEndDate" className='mt-3'>
                                    <Form.Label>Phone</Form.Label>
                                    <InputGroup>
                                        <FormControl type="tel" ref={PhoneRef} defaultValue={editPage?.Phone}/>
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group controlId="formBasicEndDate" className='mt-3'>
                                    <Form.Label>whatsapp</Form.Label>
                                    <InputGroup>
                                        <FormControl type="tel" ref={whatsappRef} defaultValue={editPage?.whatsapp}/>
                                    </InputGroup>
                                </Form.Group>


                                <Form.Group controlId="formBasicEndDate" className='mt-3'>
                                    <Form.Label>Messenger</Form.Label>
                                    <InputGroup>
                                        <FormControl type="url" ref={MessengerRef} defaultValue={editPage?.Messenger}/>
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
                                    <Link to={'/contactus'}>
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

export default EditContactus

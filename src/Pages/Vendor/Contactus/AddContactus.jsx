import React, { useRef } from 'react'
import   axios   from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Component from '../../../constants/Component';
import { Container, Form,Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import Icons from '../../../constants/Icons';
import { Link } from 'react-router-dom';

const AddContactus = () => {
    let navigate = useNavigate();
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

    const submit = e => {
        e.preventDefault()
        addNewAds({
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
        });
    }

    async function addNewAds(ads) {
        await axios.post(`https://cureclinckapi.amlakturks.com/public/api/Addcontactus`, ads).then((res) => {

            if (res.data.message === "success") {
                toast.success('New ads added successfully!', {
                    duration: 4000,
                    position: 'top-center',
                    icon: <Icons.Added color='#40AB45' size={25} />,
                    iconTheme: {
                        primary: '#0a0',
                        secondary: '#fff',
                    },
                });
                setTimeout(() => {
                    navigate('/contactus');
                }, 2000);
            } else {
                toast.error(res.data.message)
            }
        });
    }

    return (
        <Container fluid>
            <div className="app__addprodects">
                <Component.SubNav sub__nav={[{ name: " Contact Us", path: '/contactus' }, { name: "Add contact us  ", path: '/contactus/addcontactus' }]} />

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
                                                        <option key={index} value={item.id}   >{item.lang}</option>
                                                    ))
                                                }
                                            </Form.Select>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicEndDate" className='mt-3'>
                                            <Form.Label>Longit</Form.Label>
                                            <InputGroup>
                                                <FormControl type="number" ref={LongitRef} />
                                            </InputGroup>
                                        </Form.Group>


                                        <Form.Group controlId="formBasicEndDate" className='mt-3'>
                                            <Form.Label>Lat</Form.Label>
                                            <InputGroup>
                                                <FormControl type="number" ref={LatRef} />
                                            </InputGroup>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicEndDate" className='mt-3'>
                                            <Form.Label>City country</Form.Label>
                                            <InputGroup>
                                                <FormControl type="text" ref={CitycountryRef} />
                                            </InputGroup>
                                        </Form.Group>


                                        <Form.Group controlId="formBasicEndDate" className='mt-3'>
                                            <Form.Label>address</Form.Label>
                                            <InputGroup>
                                                <FormControl type="text" ref={addressRef} />
                                            </InputGroup>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicEndDate" className='mt-3'>
                                            <Form.Label>footerHead</Form.Label>
                                            <InputGroup>
                                                <FormControl type="text" ref={footerHeadRef} />
                                            </InputGroup>
                                        </Form.Group>

   


                                    </Col>

                                    <Col xl={6} lg={6} md={6} sm={12} className="app__addprodects-form-en">

                                    <Form.Group controlId="formBasicEndDate" className='mt-3'>
                                            <Form.Label>footerBody</Form.Label>
                                            <InputGroup>
                                                <FormControl type="text" ref={footerBodyRef} />
                                            </InputGroup>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicEndDate" className='mt-3'>
                                            <Form.Label>footerText</Form.Label>
                                            <InputGroup>
                                                <FormControl type="text" ref={footerTextRef} />
                                            </InputGroup>
                                        </Form.Group>


                                        <Form.Group controlId="formBasicEndDate" className='mt-3'>
                                            <Form.Label>Email</Form.Label>
                                            <InputGroup>
                                                <FormControl type="email" ref={EmailRef} />
                                            </InputGroup>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicEndDate" className='mt-3'>
                                            <Form.Label>Phone</Form.Label>
                                            <InputGroup>
                                                <FormControl type="tel" ref={PhoneRef} />
                                            </InputGroup>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicEndDate" className='mt-3'>
                                            <Form.Label>whatsapp</Form.Label>
                                            <InputGroup>
                                                <FormControl type="tel" ref={whatsappRef} />
                                            </InputGroup>
                                        </Form.Group>


                                        <Form.Group controlId="formBasicEndDate" className='mt-3'>
                                            <Form.Label>Messenger</Form.Label>
                                            <InputGroup>
                                                <FormControl type="url" ref={MessengerRef} />
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
                                            <Link to={'/ads'}>
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

export default AddContactus
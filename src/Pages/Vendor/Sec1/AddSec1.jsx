import React, { useRef } from 'react'
import   axios   from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Component from '../../../constants/Component';
import { Container, Form,Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import Icons from '../../../constants/Icons';
import { Link } from 'react-router-dom';

const AddSec1 = () => {
    let navigate = useNavigate();
    const LangRef = useRef(null);
    const SmallOneRef = useRef(null);
    const BigOneRef = useRef(null); 
    const ColorOneRef = useRef(null);
    const SmallFirstRef = useRef(null);
    const SmallSecRef = useRef(null); 

    const submit = e => {
        e.preventDefault()
        addNewAds({
            Lang: LangRef.current.value,
            SmallOne: SmallOneRef.current.value,
            BigOne: BigOneRef.current.value, 
            ColorOne: ColorOneRef.current.value,
            SmallFirst: SmallFirstRef.current.value,
            SmallSec: SmallSecRef.current.value, 
        });
    }

    async function addNewAds(ads) {
        await axios.post(`https://cureclinckapi.amlakturks.com/public/api/Addsection1`, ads).then((res) => {

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
                    navigate('/section1');
                }, 500);
            } else {
                toast.error(res.data.message)
            }
        });
    }

  return(
    <>
            <Container fluid>
            <div className="app__addprodects">
                <Component.SubNav sub__nav={[{ name: " Section 1 ", path: '/section1' }, { name: "Add Item ", path: '/section1/addsection1' }]} />

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
                                            <Form.Label>SmallOne</Form.Label>
                                            <InputGroup>
                                                <FormControl type="text" ref={SmallOneRef} />
                                            </InputGroup>
                                        </Form.Group>


                                        <Form.Group controlId="formBasicEndDate" className='mt-3'>
                                            <Form.Label>BigOne</Form.Label>
                                            <InputGroup>
                                                <FormControl type="text" ref={BigOneRef} />
                                            </InputGroup>
                                        </Form.Group>

                            




   


                                    </Col>

                                    <Col xl={6} lg={6} md={6} sm={12} className="app__addprodects-form-en">
                                    <Form.Group controlId="formBasicEndDate" className='mt-3'>
                                            <Form.Label>ColorOne</Form.Label>
                                            <InputGroup>
                                                <FormControl type="text" ref={ColorOneRef} />
                                            </InputGroup>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicEndDate" className='mt-3'>
                                            <Form.Label>SmallFirst</Form.Label>
                                            <InputGroup>
                                                <FormControl type="text" ref={SmallFirstRef} />
                                            </InputGroup>
                                        </Form.Group>
                                    <Form.Group controlId="formBasicEndDate" className='mt-3'>
                                            <Form.Label>SmallSec</Form.Label>
                                            <InputGroup>
                                                <FormControl type="text" ref={SmallSecRef} />
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
                                            <Link to={'/section1'}>
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
    </>
  )
}

export default AddSec1
import React, { useRef } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Component from '../../../../constants/Component';
import Icons from '../../../../constants/Icons';
import Form from 'react-bootstrap/Form';
import { apiheader } from '../../../../utils/fetchData';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';


const AddSec6 = ({ baseURL }) => {


    let navigate = useNavigate();

    const sect = useRef();
    const images = useRef();

    let add_URL = `${baseURL}Addsliders`;

    const submit = e => {
        e.preventDefault()

        addHandeler({
            sect: sect.current.value,
            images: images.current.files[0],
        })
    }

    async function addHandeler(newUser) {
        await axios.post(add_URL , newUser , apiheader)
        .then((res) => {
            if (res.data.message === 'success') {
                toast.success('New item added successfully!', {
                    duration: 2000,
                    position: 'top-center',  
                    icon: <Icons.Added color='#40AB45' size={25}/>, 
                    iconTheme: {
                        primary: '#0a0',
                        secondary: '#fff',
                    },
                });
                setTimeout(() => {
                    navigate('/slider');
                }, 2000);
            }else{
                toast.error(res.data.message)
            }
        });
    }


    return (
        <>
            <Container fluid>
                <div className="app__addprodects">
                    <Component.SubNav sub__nav={[{ name: "Section6", path: '/slider' }, { name: "Add Item", path: '/slider/add' }]} />
                    <div className="app__addprodects__header ">
                        <Component.BaseHeader h1={'Add New Slide'} />
                        <div className="app__addOrder-form">
                            <div className="app__addprodects-form">
                                <form onSubmit={submit}>
                                    <Row>
                                        <Col xl={6} lg={6} md={6} sm={12} className="app__addprodects-form-en">
                                            <Form.Group controlId="formBasicLang">
                                                <Form.Label>Slide</Form.Label>
                                                <Form.Select aria-label="Default select example" ref={sect}>
                                                    <option>Access Slide</option>
                                                    <option value="1">Slide 1</option>
                                                    <option value="2">Slide 2</option>
                                                    <option value="3">Slide 3</option>
                                                    <option value="4">Slide 4</option>
                                                    <option value="5">Slide 4 (Header)</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>

                                        <Col xl={6} lg={6} md={6} sm={12} className="app__addprodects-form-en">
                                            <Form.Group controlId="formBasicImages">
                                                <Form.Label>Image</Form.Label>
                                                <Form.Control type="file" name='images' ref={images} />
                                            </Form.Group>
                                        </Col>

                                        <div className='d-flex justify-content-center align-content-center my-5'>
                                            <div className='baseBtn1'>
                                                <Button type='submit' variant={'primary'} className='d-flex align-items-center justify-content-center'>
                                                    Save
                                                </Button>
                                            </div>

                                            <div className='baseBtn'>
                                                <Link to={'/section2'}>
                                                    <Button  variant={'primary'} className='d-flex align-items-center justify-content-center'>
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
            </Container>
        </>
    )
}

export default AddSec6



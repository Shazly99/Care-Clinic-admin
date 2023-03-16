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


const AddSec5 = ({ baseURL }) => {


    let navigate = useNavigate();

    const title = useRef();
    const body = useRef();
    const image = useRef();
    const lang = useRef();

    let add_URL = `${baseURL}Addsection5`;

    const submit = e => {
        e.preventDefault()

        addHandeler({
            Body: body.current.value,
            images: image.current.files[0],
            Title: title.current.value,
            Lang: lang.current.value
        })
    }

    async function addHandeler(newUser) {
        await axios.post(add_URL , newUser , apiheader)
        .then((res) => {
            if (res.data.message === 'success') {
                toast.success('New item added successfully!', {
                    duration: 500,
                    position: 'top-center',  
                    icon: <Icons.Added color='#40AB45' size={25}/>, 
                    iconTheme: {
                        primary: '#0a0',
                        secondary: '#fff',
                    },
                });
                setTimeout(() => {
                    navigate('/section5');
                }, 500);
            }else{
                toast.error(res.data.message)
            }
        });
    }


    return (
        <>
            <Container fluid>
                <div className="app__addprodects">
                    <Component.SubNav sub__nav={[{ name: "Section5", path: '/section5' }, { name: "Add Item", path: '/section5/add' }]} />
                    <div className="app__addprodects__header ">
                        <Component.BaseHeader h1={'Add New Item'} />
                        <div className="app__addOrder-form">
                            <div className="app__addprodects-form">
                                <form onSubmit={submit}>
                                    <Row>
                                        <Col xl={6} lg={6} md={6} sm={12} className="app__addprodects-form-en">

                                            <Form.Group controlId="formBasicTitle">
                                                <Form.Label>Title</Form.Label>
                                                <Form.Control type="text" name='title' ref={title} />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicBody" className='mt-3'>
                                                <Form.Label>Body</Form.Label>
                                                <Form.Control type="text" name='body' ref={body} />
                                            </Form.Group>

                                        </Col>
                                        <Col xl={6} lg={6} md={6} sm={12} className="app__addprodects-form-en">

                                            <Form.Group controlId="formBasicImage">
                                                <Form.Label>Image</Form.Label>
                                                <Form.Control type="file" name='image' ref={image} />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicLang" className='mt-3'>
                                                <Form.Label>Language</Form.Label>
                                                <Form.Select aria-label="Default select example" ref={lang}>
                                                    <option>Access Language</option>
                                                    <option value="1">Arabic</option>
                                                    <option value="2">English</option>
                                                    <option value="3">French</option>
                                                    <option value="4">Russian</option>
                                                    <option value="5">Turkish</option>
                                                </Form.Select>
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

export default AddSec5


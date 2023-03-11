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


const AddStaff = ({ baseURL }) => {


    let navigate = useNavigate();

    const nameReq = useRef();
    const desc = useRef();
    const images = useRef();

    let add_URL = `${baseURL}Addstaff`;

    const submit = e => {
        e.preventDefault()

        addHandeler({
            Namereq: nameReq.current.value,
            Desc: desc.current.value,
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
                    navigate('/staff');
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
                    <Component.SubNav sub__nav={[{ name: "Staff", path: '/staff' }, { name: "Add Item", path: '/staff/add' }]} />
                    <div className="app__addprodects__header ">
                        <Component.BaseHeader h1={'Add New Member'} />
                        <div className="app__addOrder-form">
                            <div className="app__addprodects-form">
                                <form onSubmit={submit}>
                                    <Row>

                                        <Col xl={6} lg={6} md={6} sm={12} className="app__addprodects-form-en">
                                            <Form.Group controlId="formBasicName">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control type="text" name='name' ref={nameReq} />
                                            </Form.Group>
                                        </Col>

                                        <Col xl={6} lg={6} md={6} sm={12} className="app__addprodects-form-en">
                                            <Form.Group controlId="formBasicDesc">
                                                <Form.Label>Desc</Form.Label>
                                                <Form.Control type="text" name='desc' ref={desc} />
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

export default AddStaff



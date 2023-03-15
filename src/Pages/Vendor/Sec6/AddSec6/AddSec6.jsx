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

    const lang = useRef();
    const firstKey = useRef();
    const firstValue = useRef();
    const secondKey = useRef();
    const secondValue = useRef();
    const thirdKey = useRef();
    const thirdValue = useRef();
    const fourthKey = useRef();
    const fourthValue = useRef();

    let add_URL = `${baseURL}Addsection6`;

    const submit = e => {
        e.preventDefault()

        addHandeler({
            Lang: lang.current.value,
            SatisfactionKey: firstKey.current.value,
            SatisfactionValue: firstValue.current.value,
            YearsExpkey: secondKey.current.value,
            YearsExpValue: secondValue.current.value,
            StaffCountKey: thirdKey.current.value,
            StaffCountValue: thirdValue.current.value,
            DcKey: fourthKey.current.value,
            Dcvalue: fourthValue.current.value,
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
                    navigate('/section6');
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
                    <Component.SubNav sub__nav={[{ name: "Section6", path: '/section6' }, { name: "Add Item", path: '/section6/add' }]} />
                    <div className="app__addprodects__header ">
                        <Component.BaseHeader h1={'Add New Item'} />
                        <div className="app__addOrder-form">
                            <div className="app__addprodects-form">
                                <form onSubmit={submit}>
                                    <Row>
                                        <Col xl={6} lg={6} md={6} sm={12} className="app__addprodects-form-en">
                                            <Form.Group controlId="formBasicLang">
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

                                        <Col xl={6} lg={6} md={6} sm={12} className="app__addprodects-form-en">
                                            <Form.Group controlId="formBasicFirstKey">
                                                <Form.Label>First Key</Form.Label>
                                                <Form.Control type="text" name='firstKey' ref={firstKey} />
                                            </Form.Group>
                                        </Col>

                                        <Col xl={6} lg={6} md={6} sm={12} className="app__addprodects-form-en">
                                            <Form.Group controlId="formBasicFirstValue">
                                                <Form.Label>First Value</Form.Label>
                                                <Form.Control type="number" name='firstValue' ref={firstValue} />
                                            </Form.Group>
                                        </Col>

                                        <Col xl={6} lg={6} md={6} sm={12} className="app__addprodects-form-en">
                                            <Form.Group controlId="formBasicSecondKey">
                                                <Form.Label>Second Key</Form.Label>
                                                <Form.Control type="text" name='secondKey' ref={secondKey} />
                                            </Form.Group>
                                        </Col>

                                        <Col xl={6} lg={6} md={6} sm={12} className="app__addprodects-form-en">
                                            <Form.Group controlId="formBasicSecondValue">
                                                <Form.Label>Second Value</Form.Label>
                                                <Form.Control type="number" name='secondValue' ref={secondValue} />
                                            </Form.Group>
                                        </Col>

                                        <Col xl={6} lg={6} md={6} sm={12} className="app__addprodects-form-en">
                                            <Form.Group controlId="formBasicThirdKey">
                                                <Form.Label>Third Key</Form.Label>
                                                <Form.Control type="text" name='thirdKey' ref={thirdKey} />
                                            </Form.Group>
                                        </Col>

                                        <Col xl={6} lg={6} md={6} sm={12} className="app__addprodects-form-en">
                                            <Form.Group controlId="formBasicThirdValue">
                                                <Form.Label>Third Value</Form.Label>
                                                <Form.Control type="number" name='thirdValue' ref={thirdValue} />
                                            </Form.Group>
                                        </Col>

                                        <Col xl={6} lg={6} md={6} sm={12} className="app__addprodects-form-en">
                                            <Form.Group controlId="formBasicFourthKey">
                                                <Form.Label>Fourth Key</Form.Label>
                                                <Form.Control type="text" name='fourthKey' ref={fourthKey} />
                                            </Form.Group>
                                        </Col>

                                        <Col xl={6} lg={6} md={6} sm={12} className="app__addprodects-form-en">
                                            <Form.Group controlId="formBasicFourthValue">
                                                <Form.Label>Fourth Value</Form.Label>
                                                <Form.Control type="number" name='fourthValue' ref={fourthValue} />
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


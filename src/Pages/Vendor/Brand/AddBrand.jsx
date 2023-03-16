import React, { useRef, useState } from 'react';
import { Col, Container, Form, FormControl, Row, Button } from 'react-bootstrap';
import Component from '../../../constants/Component';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Icons from '../../../constants/Icons';
import { Link } from 'react-router-dom';
import { apiheader } from './../../../utils/fetchData';

const AddBrand = () => {
    let navigate = useNavigate(); 
    // TODO:: select image
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleImageSelect = (event) => {
        setSelectedImage(event.target.files[0]);
    };
    // TODO:: end image 

    const submit =async( e) => {
        e.preventDefault()
        console.log({  images: selectedImage });
        await axios.post(`https://cureclinckapi.amlakturks.com/public/api/Addbrands`, {  images:  selectedImage  },apiheader).then((res) => {
            if (res.data.message === "success") {
                toast.success('New ads Brand successfully!', {
                    duration: 500,
                    position: 'top-center',
                    icon: <Icons.Added color='#40AB45' size={25} />,
                    iconTheme: {
                        primary: '#0a0',
                        secondary: '#fff',
                    },
                });
                setTimeout(() => {
                    navigate('/brand');
                }, 500);
            } else {
                toast.error(res.data.message)
            }
        });
    } 
    return (
        <Container fluid>
            <div className="app__addprodects">
                <Component.SubNav sub__nav={[{ name: " Brands", path: '/brand' }, { name: "Add New Brand ", path: '/brand/addbrand' }]} />

                <div className="app__addprodects__header ">
                    <Component.BaseHeader h1={'Add New Brand'} />
                    <div className="app__addOrder-form">

                        <div className="app__addprodects-form">
                            <form onSubmit={submit}>
                                <Row>
                                    <Col xl={6} lg={6} md={6} sm={12} className="app__addprodects-form-en">
                                        <Form.Group>
                                            <Form.Label>Ads Image</Form.Label>
                                            <FormControl
                                                id="custom-file"
                                                type="file"
                                                label={selectedImage ? selectedImage.name : 'Choose file'}
                                                ref={fileInputRef}
                                                onChange={handleImageSelect}
                                                accept="image/*"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col xl={6} lg={6} md={6} sm={12} className="app__addprodects-form-en d-flex justify-content-center">
                                        <Form.Group>
                                            <div className="mt-3  " style={{ width: "200px " }}>
                                                {selectedImage && (
                                                    <img
                                                        loading="lazy"
                                                        src={URL.createObjectURL(selectedImage)}
                                                        alt={selectedImage.name}
                                                        className='rounded-3 w-100'
                                                    />
                                                )}
                                            </div>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <div className='d-flex justify-content-center align-item-center my-5'>

                                    <div className='baseBtn1'>
                                        <Button type='submit' variant={'primary'} className='d-flex align-items-center justify-content-center'>
                                            Save
                                        </Button>
                                    </div>

                                    <div className='baseBtn'>
                                        <Link to={'/brand'}>
                                            <Button variant={'primary'} className='d-flex align-items-center justify-content-center'>
                                                Cancel
                                            </Button>
                                        </Link>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Container >
    )
}

export default AddBrand

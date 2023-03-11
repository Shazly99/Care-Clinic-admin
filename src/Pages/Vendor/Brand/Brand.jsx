import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Button,Modal, Dropdown, DropdownButton, Table } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Component from '../../../constants/Component';
import Icons from '../../../constants/Icons';
import oops from '../../../assets/Images/users/Z.jfif';

  
const Brand = () => {
    const [Brand, setBrand] = useState(null)
    const [showDeleteModal, setShowDeleteModal] = useState(false); 

    // get BrandSubCategories
    const BrandGet = async () => {
        let { data } = await axios.get(`https://cureclinckapi.amlakturks.com/public/api/getbrands`);
        setBrand(data.data);
        console.log(data.data);
    }

    const handleActionSelect = async (id, action) => {
        if (action === "DELETED") {
            setShowDeleteModal(true);
        }
    };

    const handleDeleteUser = async (id) => {
        // Logic for deleting user with ID `selectedUserId`
        setShowDeleteModal(false); 
        let { data } = await axios.post(`https://cureclinckapi.amlakturks.com/public/api/deletebrand?ID=${id}`, {}); 
        await BrandGet()
    }


    useEffect(() => {
        BrandGet()
    }, [])

    return (
        <> 
        {
            Brand?
            <div className="app__Users ">
                <Component.ButtonBase title={"Add  "} bg={"primary"} icon={<Icons.add size={21} color={'#ffffffb4'} />} path="/brand/addbrand" />
                <div className="app__Users-table"> 
                    <Table responsive={true} className='rounded-3 '>
                        <thead>
                            <tr className='text-center  ' style={{ background: '#F9F9F9' }}>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {
                                Brand?.map((item, index) => (
                                    <tr key={index}>
                                        <td >
                                            <div style={{ maxWidth: '170px' }}>
                                                <img src={`https://cureclinckapi.amlakturks.com/storage/app/brands/${item?.Image}`} className='w-100 rounded-3' loading="lazy" />
                                            </div>
                                        </td> 
                                        <td>
                                            <div>

                                                <span>
                                                    <DropdownButton
                                                        id={`dropdown-${item.IDBrandSubCategory}`}
                                                        title="Actions"
                                                        variant="outline-success"
                                                        onSelect={(eventKey) => handleActionSelect(item.IDBrandSubCategory, eventKey)}
                                                        className="DropdownButton "
                                                        drop={'down-centered'}
                                                    >
                                                        <Dropdown.Item eventKey="Edite" as={Link} to={`/Brands/subcategories/editsubcategories/${item.IDBrandSubCategory}`}>
                                                            Edit
                                                        </Dropdown.Item>

                                                        <Dropdown.Item eventKey="DELETED">Deleted</Dropdown.Item>
                                                        <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered>
                                                                    <Modal.Header closeButton>
                                                                        <Modal.Title className='text-center w-100 text-warning'>
                                                                            <h5 className='mb-0'>Warning Remove..</h5>
                                                                        </Modal.Title>
                                                                    </Modal.Header>
                                                                    <Modal.Body>
                                                                        <img src={oops} className='w-50 d-block mx-auto' alt="oops" loading="lazy" />

                                                                    </Modal.Body>
                                                                    <Modal.Footer className='  d-flex justify-content-center'>
                                                                        <Button variant="primary" onClick={() => handleDeleteUser(item.ID)}>
                                                                            Confirm
                                                                        </Button>
                                                                        <Button variant="primary" onClick={() => setShowDeleteModal(false)}>
                                                                            Cancel
                                                                        </Button>
                                                                    </Modal.Footer>
                                                                </Modal>


                                                    </DropdownButton>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </Table>
                </div>

            </div> :
            <Component.Loader />
        }
        </>
    )
}

export default Brand

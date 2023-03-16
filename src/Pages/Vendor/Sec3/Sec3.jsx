import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Modal, Dropdown, DropdownButton, Table } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Component from '../../../constants/Component';
import Icons from '../../../constants/Icons';
import oops from '../../../assets/Images/users/oops.png';


const Sec3 = () => {
    const [contactus, setContactus] = useState(null)
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    // get contactusSubCategories
    const contactusGet = async () => {
        let { data } = await axios.get(`https://cureclinckapi.amlakturks.com/public/api/getsection3`);
        setContactus(data.data);
    }

    const handleActionSelect = async (id, action) => {
        if (action === "DELETED") {
            setShowDeleteModal(true);
        }
    };

    const handleDeleteUser = async (id) => {
        // Logic for deleting user with ID `selectedUserId`
        setShowDeleteModal(false);
        let { data } = await axios.post(`https://cureclinckapi.amlakturks.com/public/api/deletesection3?ID=${id}`, {});
        await contactusGet()
    }


    useEffect(() => {
        contactusGet()
    }, [])
    return (

        <>

{
            contactus?
            <div className="app__Users ">
                <Component.ButtonBase title={"Add  "} bg={"primary"} icon={<Icons.add size={21} color={'#ffffffb4'} />} path="/section3/addsection3" />
                <div className="app__Users-table">
                    <Table responsive={true} className='rounded-3 '>
                        <thead>
                            <tr className='text-center  ' style={{ background: '#F9F9F9' }}>
                                <th>Lang</th>
                                <th>PTitle </th>
                                <th> Pbody</th>
                                <th>LTitle </th>
                                <th>LBody </th>
                                <th> BATitle</th>
                                <th> BABody</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {
                                contactus?.map((item, index) => (
                                    <tr key={index}>
                                        <td >
                                            <div >
                                                {item.Lang === '1' && "Arabic"}
                                                {item.Lang === '2' && "English"}
                                                {item.Lang === '3' && "French"}
                                                {item.Lang === '4' && "Russian"}
                                                {item.Lang === '5' && "Turkish"}
                                            </div>
                                        </td>
                                        <td >
                                            <div >
                                                {item.PTitle}
                                            </div>
                                        </td>
                                        <td >
                                            <div >
                                                {item.Pbody}
                                            </div>
                                        </td>
                                        <td >
                                            <div >
                                                {item.LTitle}
                                            </div>
                                        </td>
                                        <td >
                                            <div>
                                                {item.LBody}
                                            </div>
    
                                        </td>
    
                                        <td >
                                            <div>
                                                {item.BATitle}
                                            </div>
                                        </td>
                                        <td >
                                            <div>
                                                {item.BABody}
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
                                                        <Dropdown.Item eventKey="Edite" as={Link} to={`/section3/editsection3/${item.ID}`}>
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
    
            </div>
            : <Component.Loader />
        }
        </>

    )
}

export default Sec3
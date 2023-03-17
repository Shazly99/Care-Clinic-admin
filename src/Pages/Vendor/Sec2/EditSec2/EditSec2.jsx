import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Component from '../../../../constants/Component';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import Icons from '../../../../constants/Icons';
import { Link } from 'react-router-dom';
import { GetData } from '../../../../utils/fetchData'; 

const EditSec2 = () => {
    let { id } = useParams()
    let navigate = useNavigate();
  
    let BASE_URL = 'https://cureclinckapi.amlakturks.com/public/api/'
  
    const title = useRef();
    const body = useRef();
    const image = useRef();
    const lang = useRef();
  
    const [editPage, setgetSec] = useState(null)
  
    const submit = e => {
      e.preventDefault();
      {image?.current?.files?.length === 1 ?
        editSec({
          Body: body.current.value,
          images: image.current.files[0],
          Title: title.current.value,
          Lang: lang.current.value,
          ID: id
        })
        :
        editSec({
          Body: body.current.value,
          Title: title.current.value,
          Lang: lang.current.value,
          ID: id
        })
      }
    }
  
    async function editSec(update) {
      await axios.post(`${BASE_URL}Updatesection2`, update , {
        headers: {
            'Content-Type': 'multipart/form-data',
        } 
    }).then((res) => {
        if (res.data.message === "success") {
          toast.success('updated successfully!', {
            duration: 500,
            position: 'top-center',
            icon: <Icons.upload color='#40AB45' size={25} />,
            iconTheme: {
              primary: '#0a0',
              secondary: '#fff',
            },
          });
          setTimeout(() => {
            navigate('/section2');
          }, 500);
        } else {
          toast.error(res.data.message)
        }
      });
    }
    const diplayUserData = async () => {
      let { data } = await GetData(`${BASE_URL}Getsection2ByID?ID=${id}`)
      setgetSec(data.data);
    }
    useEffect(() => {
      diplayUserData()
    }, [id])
    return (
        <>
          <Container fluid>
              <div className="app__addprodects">
                  <Component.SubNav sub__nav={[{ name: "Section 2", path: '/section2 ' }, { name: "Edit Section 2 ", path: `/section2/edit/${id}` }]} />
                  <div className="app__addprodects__header ">
                      <Component.BaseHeader h1={'Edit an Item'} />
                      <div className="app__addOrder-form">
                          <div className="app__addprodects-form">
                              <form onSubmit={submit}>
                                  <Row>
                                      <Col xl={6} lg={6} md={6} sm={12} className="app__addprodects-form-en">

                                          <Form.Group controlId="formBasicTitle">
                                              <Form.Label>Title</Form.Label>
                                              <Form.Control type="text" name='title' ref={title} defaultValue={editPage?.Title} />
                                          </Form.Group>

                                          <Form.Group controlId="formBasicBody" className='mt-3'>
                                              <Form.Label>Body</Form.Label>
                                              <Form.Control type="text" name='body' ref={body} defaultValue={editPage?.Body} />
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
                                                  {
                                                      [{ id: 1, lang: 'Arabic' }, { id: 2, lang: 'English' }, { id: 3, lang: 'French' }, { id: 4, lang: 'Russian' }, { id: 5, lang: 'Turkish' }]?.map((item, index) => (
                                                          <option key={index} value={item.id}  selected={Number(editPage?.Lang) === Number(item.id )&& item.lang }  >{item.lang}</option>
                                                      ))
                                                  }
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

export default EditSec2

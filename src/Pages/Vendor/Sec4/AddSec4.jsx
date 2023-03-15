import React, { useRef } from 'react'
import   axios   from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Component from '../../../constants/Component';
import { Container, Form,Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import Icons from '../../../constants/Icons';
import { Link } from 'react-router-dom';

const AddSec4 = () => {
  let navigate = useNavigate();
  const LangRef = useRef(null);
  const VideoURLRef = useRef(null);
  const TitleRef = useRef(null); 
  const bodyRef = useRef(null); 

  const submit = e => {
      e.preventDefault()
      addNewAds({
          Lang: LangRef.current.value,
        //   VideoURL: VideoURLRef.current.value,
          Title: TitleRef.current.value, 
          body: bodyRef.current.value,
 
      });
  }

  async function addNewAds(ads) {
      await axios.post(`https://cureclinckapi.amlakturks.com/public/api/Addsection4`, ads).then((res) => {

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
                  navigate('/section4');
              }, 500);
          } else {
              toast.error(res.data.message)
          }
      });
  }

return (
  <>
          <Container fluid>
          <div className="app__addprodects">
              <Component.SubNav sub__nav={[{ name: " Section 4 ", path: '/section4' }, { name: "Add Item", path: '/section4/addsection4' }]} />

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

                                      {/* <Form.Group controlId="formBasicEndDate" className='mt-3'>
                                          <Form.Label>VideoURL :</Form.Label>
                                          <InputGroup>
                                              <FormControl type="text" ref={VideoURLRef} />
                                          </InputGroup>
                                      </Form.Group>  */}

                                      <Form.Group controlId="formBasicEndDate" className='mt-3'>
                                          <Form.Label>Title</Form.Label>
                                          <InputGroup>
                                              <FormControl type="text" ref={TitleRef} />
                                          </InputGroup>
                                      </Form.Group>

                                  </Col>

                                  <Col xl={6} lg={6} md={6} sm={12} className="app__addprodects-form-en">

                                      <Form.Group controlId="formBasicEndDate" className='mt-3'>
                                          <Form.Label>body</Form.Label>
                                          <InputGroup>
                                              <FormControl type="text" ref={bodyRef} />
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

export default AddSec4
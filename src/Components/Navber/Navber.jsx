import { motion } from 'framer-motion';
import React, { useContext, useState } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import Img from '../../assets/Img';
import Icons from '../../constants/Icons';
import { VendersContext } from './../../context/Store';
import routes from './../Sidebar/route';
import './Navber.scss';

function Navber() {
  let { LogOut } = useContext(VendersContext);

  const [Toggle, setToggle] = useState(false);

  return (
    <>
      <Navbar className='bg-light navSubMain'>
        <Container fluid  >
          <Navbar.Collapse  >
            <div className="app__navbar-menu">

              <HiMenuAlt4 onClick={() => setToggle(!Toggle)} />

              {
                Toggle && (
                    <motion.div className='sidebarSm' whileInView={{ x: [-300, 0] }} transition={{ duration: 1.5, ease: 'backOut' }} >
                    <HiX onClick={() => setToggle(!Toggle)} />
                    <ul >
                      {routes.map((item, index) =>
                      (<li key={index}>
                        <Link to={item.path} onClick={() => setToggle(false)} className='d-flex' >
                          {item.icon}
                          {item.name}
                        </Link>
                      </li>
                      ))}
                    </ul>

                  </motion.div>
                )
              }
            </div>

            {/*<InputGroup>
              <button id="basic-addon1" className='btn__search'>
                <Icons.Search />
              </button>
              <Form.Control
                placeholder="Search about Products"
                aria-label="Username"
                aria-describedby="basic-addon1"
                className='input__search'
              />
            </InputGroup> */}
          </Navbar.Collapse>

          <Navbar.Toggle />

          <Navbar.Collapse className="navEnd justify-content-end">
 

            <Nav>
              <NavDropdown title={<img src={Img.avatar1} width="40" height="40" style={{ borderRadius: '10px' }} />} id="basic-nav-dropdown"  >
                <div style={{ maxHeight: '60vh', overflowY: 'auto' }}>
 

                  {/* <NavDropdown.Divider /> */}

                  <LinkContainer onClick={LogOut} to={'/auth/login'}>
                    <NavDropdown.Item  >
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={Icons.logout} alt="" srcset="" style={{ marginRight: 10 }} width={18} height={18} />
                        <span>  Logout  </span>
                      </div>
                    </NavDropdown.Item>
                  </LinkContainer>


                </div>
              </NavDropdown>

            </Nav> 
            
          </Navbar.Collapse>


        </Container>
      </Navbar>
    </>
  )
}

export default Navber
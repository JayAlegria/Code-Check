import React from 'react'
import { Container, Row, Col, Nav, Button, Card, Form, NavDropdown } from 'react-bootstrap'
import WhiteLogo from '../../assets/images/logo-white.png'
import LogoFace from '../../assets/images/logo-face.png'
import { Link } from 'react-router-dom'

function Dashboard() {
    return (
        <div className="dashboard">
            <Container fluid>
                <Row>
                    <Col lg={3} className="sidebar py-0 px-0 bg-dark">

                        <div className="logo px-5 py-5">
                            <Link to = "/">
                                <img src={ WhiteLogo } alt="Brand Captain" />
                            </Link>
                        </div>

                        <ul className="sidebar__list px-0"> 
                            <li className="sidebar__item px-5 py-4">
                                <Link to = "/">Dashboard</Link>
                            </li>
                            <li className="sidebar__item px-5 py-4 active">
                                <Link to = "/create-project">Projects</Link>
                            </li>
                            <li className="sidebar__item px-5 py-4">Assets</li>
                        </ul>
                        
                    </Col> {/** sidebar */}

                    <Col lg={9} className="content px-5 pt-2 pb-5">

                        <Nav className="justify-content-end content__navigation">
                            <Nav.Item>
                                <Nav.Link href="#!">Icon</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link href="#!">Icon</Nav.Link>
                            </Nav.Item>

                            <NavDropdown title="Profile">
                                <div className="profile text-center">
                                    <img src={ LogoFace } alt="User profile" />
                                    <p className="username text-bold title mb-0">Jhon Doe</p>
                                    <p className="companyname text-muted">Company Name</p>
                                    <a href="#!" className="btn btn-blue-transparent mb-3">My Account</a>
                                </div>
                                <NavDropdown.Divider />
                                <div className="dropdown-action">
                                    <Row>
                                        <Col xs={"auto"}>
                                            <NavDropdown.Item href="#action/3.1">Support</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Payments</NavDropdown.Item>
                                            <NavDropdown.Item className="text-muted text-small mt-5" href="#action/3.3">Log out</NavDropdown.Item>
                                        </Col>
                                        <Col>

                                        </Col>
                                    </Row>
                                </div>
                                
                            </NavDropdown>

                        </Nav> {/** #navbar */}

                        <Row className="content__body">

                            <Col md={8} className="left create-project">

                                <h3 className="title">Create a New Project</h3>

                                <div className="divider"></div>

                                <Form className="mt-4">

                                    <Form.Group controlId="projectName">
                                        <Form.Label>Project Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter project name" />
                                    </Form.Group>

                                    <Form.Group controlId="projectCopy">
                                        <Form.Label>Description</Form.Label>
                                            <Form.Control as="textarea" rows={3} placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, esse? Ex enim odit nam expedita, soluta consequatur voluptatibus debitis tenetur fugiat voluptate. Error distinctio fugit delectus eum corrupti molestiae esse." />
                                    </Form.Group>

                                    <Form.Group controlId="projectCopy">
                                        <Form.Label>Copy</Form.Label>
                                            <Form.Control as="textarea" rows={2}  placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, esse? Ex enim odit nam expedita, soluta consequatur voluptatibus debitis tenetur fugiat voluptate. Error distinctio fugit delectus eum corrupti molestiae esse." />
                                    </Form.Group>

                                    <Form.Group controlId="projectMandatory">
                                        <Form.Label>Mandartories</Form.Label>
                                            <Form.Control as="textarea" rows={2}  placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, esse? Ex enim odit nam expedita" />
                                    </Form.Group>

                                    <Form.Group controlId="projectCopy">
                                        <Form.Label>Pages and References</Form.Label>
                                            <Form.Control type="text" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, esse? Ex enim odit nam expedita, soluta consequatur voluptatibus debitis tenetur fugiat voluptate. Error distinctio fugit delectus eum corrupti molestiae esse." />
                                    </Form.Group>

                                    <Form.Row>
                                        <Form.Group as={Col} controlId="projectSocialMediaSize">
                                            <Form.Label>Social Media Sizes</Form.Label>
                                            <Form.Control as="select" defaultValue="Choose...">
                                                <option>Choose...</option>
                                                <option>...</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="projectDisplaySize">
                                            <Form.Label>Display Sizes</Form.Label>
                                            <Form.Control as="select" defaultValue="Choose...">
                                                <option>Choose...</option>
                                                <option>...</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col} controlId="projectOthers">
                                            <Form.Label>Others</Form.Label>
                                            <Form.Control as="select" defaultValue="Choose...">
                                                <option>Choose...</option>
                                                <option>...</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="projectFormat">
                                            <Form.Label>Format</Form.Label>
                                            <Form.Control as="select" defaultValue="Choose...">
                                                <option>Choose...</option>
                                                <option>...</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Form.Row>

                                    <div className="form-action">
                                        <Button variant="primary" type="submit">
                                            Submit Request
                                        </Button>   
                                        <Button className="naked ml-3" type="">
                                            Save
                                        </Button>   
                                    </div>
                                      
                                </Form>

                            </Col> {/** Left */}


                            <Col xs={4} className="right stats mt-5 ">
                                
                            </Col>  

                        </Row> {/** content body */}

                    </Col> {/** content */}
                </Row>
            </Container>
        </div>
    )
}

export default Dashboard
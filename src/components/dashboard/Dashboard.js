import React from 'react'
import { Container, Row, Col, Nav, Button, Card, Form, NavDropdown } from 'react-bootstrap'
import WhiteLogo from '../assets/images/logo-white.png'
import LogoFace from '../assets/images/logo-face.png'
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
                            <li className="sidebar__item px-5 py-4 active">
                                <Link to = "/">Dashboard</Link>
                            </li>
                            <li className="sidebar__item px-5 py-4">
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

                        <Card className="mt-3 py-2 px-5 text-center banner">
                            <Row className="align-items-center">

                                <Col>Left image</Col>

                                <Col lg={8}>
                                    <Card.Body>
                                        <Card.Title className="text-cobalt title">Hey There!</Card.Title>
                                        <Card.Text>Ready to start a brandnew project?</Card.Text>
                                        <Button variant="primary bg-dark">Add New Project</Button>
                                    </Card.Body>
                                </Col>

                                <Col>Right image</Col>
                            </Row>
                        </Card> {/** banner */}

                        <Row className="content__body">

                            <Col md={8} className="left home">

                                <div className="projects mt-5">

                                    <Row className="justify-content-between head">
                                        <Col>
                                            <h3 className="d-inline title">Open Projects</h3><span className="text-muted ml-3">( You have no projects yet)</span>
                                        </Col>
                                        <Col xs={'auto'}>
                                            <Button>Go to Projects</Button>
                                        </Col>
                                    </Row> {/** Head */}
                                    
                                    <Row className="open-project mt-3">
                                        <Col xs={6}>
                                            <Card>
                                                <Card.Img variant="top" src="https://picsum.photos/200/150" />
                                                <Card.Body 
                                                    className="px-3 py-3"
                                                    style={{
                                                        borderRadius: "0 0 20px 20px",
                                                        boxShadow: "0px 2px 10px 0px #ddd"
                                                    }}
                                                >
                                                    <Card.Text className="mb-0 text-medium">Sample project</Card.Text>
                                                    <Card.Text className="text-small">January 30, 2021</Card.Text>

                                                </Card.Body>
                                            </Card>
                                        </Col>

                                        <Col xs={6}>
                                            <Card>
                                                <Card.Img variant="top" src="https://picsum.photos/seed/picsum/200/150" />
                                                <Card.Body 
                                                    className="px-3 py-3"
                                                    style={{
                                                        borderRadius: "0 0 20px 20px",
                                                        boxShadow: "0px 2px 10px 0px #ddd"
                                                    }}
                                                >
                                                    <Card.Text className="mb-0 text-medium">Sample project</Card.Text>
                                                    <Card.Text className="text-small">January 30, 2021</Card.Text>

                                                </Card.Body>
                                            </Card>
                                        </Col>

                                    </Row> {/** open project */}
                                    
                                    <Row className="create-project mt-5">
                                        <Col xs={6}>
                                            <Card className="d-flex justify-content-center align-items-center text-muted-bold">
                                                    + Create New Project
                                            </Card>
                                        </Col>
                                        <Col xs={6}>
                                            <Card className="d-flex justify-content-center align-items-center text-muted-bold">
                                                    + Create New Project
                                            </Card>
                                        </Col>
                                    </Row> {/** create Project */}

                                </div> {/** projects */}

                                <div className="assets mt-5">

                                    <Row className="justify-content-between head">
                                        <Col>
                                            <h3 className="d-inline title">Assets</h3>
                                        </Col>
                                        <Col xs={'auto'}>
                                            <Button>Browse Assets</Button>
                                        </Col>
                                    </Row> {/** Head */}

                                    <Row className="open-assets mt-3">
                                        <Col xs={6}>
                                            <Card style={{border: 'none'}}>
                                                <Card.Img variant="top" src="https://picsum.photos/200/150" />
                                                <Card.Body 
                                                    className="px-3 py-3"
                                                    style={{
                                                        borderRadius: "0 0 20px 20px",
                                                        boxShadow: "0px 2px 10px 0px #ddd"
                                                    }}
                                                >
                                                    <Card.Text className="mb-0 text-medium">Sample project</Card.Text>
                                                    <Card.Text className="text-small">January 30, 2021</Card.Text>

                                                </Card.Body>
                                            </Card>
                                        </Col>

                                        <Col xs={6}>
                                            <Card style={{border: 'none'}}>
                                                <Card.Img variant="top" src="https://picsum.photos/seed/picsum/200/150" />
                                                <Card.Body 
                                                    className="px-3 py-3"
                                                    style={{
                                                        borderRadius: "0 0 20px 20px",
                                                        boxShadow: "0px 2px 10px 0px #ddd"
                                                    }}
                                                >
                                                    <Card.Text className="mb-0 text-medium">Sample project</Card.Text>
                                                    <Card.Text className="text-small">January 30, 2021</Card.Text>

                                                </Card.Body>
                                            </Card>
                                        </Col>

                                    </Row> {/** open assets */}

                                </div> {/** assets */}

                                <div className="conversation mt-5 border-rounded">

                                    <Card className="py-5 px-5 bg-transparent">

                                        <div className="conversation__list d-flex received mb-4">
                                            <img src={ LogoFace } alt="Brand Captain" />
                                            <div className="conversation__content">
                                                <div className="head mb-2">
                                                    <p className="m-0">Jhon Doe</p>
                                                    <span className="text-muted-bold text-tiny">12:57PM</span>
                                                </div>
                                                <div className="message text-small text-lighter">
                                                    <p>Hey, this is a sample message</p>             
                                                </div>
                                            </div>
                                        </div>

                                        <div className="conversation__list d-flex sent mb-4">
                                            <img src={ LogoFace } alt="Brand Captain" />
                                            <div className="conversation__content">
                                                <div className="head mb-2">
                                                    <p className="m-0">Jhon Doe</p>
                                                    <span className="text-muted-bold text-tiny">12:57PM</span>
                                                </div>
                                                <div className="message text-small text-lighter">
                                                    <p>Hey, this is a sample message</p>             
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="conversation__reply">
                                            <Form>
                                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label className="text-bold">Leave your reply here</Form.Label>
                                                    <Form.Control className="text-lighter" placeholder="Type your message here" as="textarea" rows={3} />
                                                </Form.Group>
                                                <Button type="submit">Submit</Button>
                                            </Form>
                                        </div>
                                    </Card>
                                </div>


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
import React from 'react'
import { Container, Row, Col, Nav, Button, Card } from 'react-bootstrap'

function Dashboard() {
    return (
        <div className="dashboard">
            <Container fluid>
                <Row>
                    <Col lg={3} className="sidebar py-0 px-0 bg-secondary">

                        <div href="!" className="logo px-5 py-5"><h1>LOGO</h1></div>

                        <ul className="sidebar__list px-0"> 
                            <li className="sidebar__item px-5 py-4 active">Dashboard</li>
                            <li className="sidebar__item px-5 py-4">Projects</li>
                            <li className="sidebar__item px-5 py-4">Assets</li>
                        </ul>
                        
                    </Col> {/** sidebar */}

                    <Col lg={9} className="content px-5 py-2">

                        <Nav className="justify-content-end">

                            <Nav.Item>
                                <Nav.Link href="#!">Link</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link href="#!">Link</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link href="#!">Link</Nav.Link>
                            </Nav.Item>

                        </Nav> {/** #navbar */}

                        <Card style={{ borderRadius: '20px' }} className="mt-3 py-2 px-5 text-center banner">
                            <Row className="align-items-center">

                                <Col>Left image</Col>

                                <Col lg={8} >
                                    <Card.Body>
                                        <Card.Title>Hey There!</Card.Title>
                                        <Card.Text>Ready to start a brandnew project?</Card.Text>
                                        <Button variant="primary bg-secondary">Add New Project</Button>
                                    </Card.Body>
                                </Col>

                                <Col>Right image</Col>
                            </Row>
                        </Card> {/** banner */}

                        <Row className="content__body">

                            <Col md={8} className="left">

                                <div className="projects  mt-5">

                                    <Row className="justify-content-between head">
                                        <Col>
                                            <h3 className="d-inline">Open Projects</h3><span>( You have no projects yet)</span>
                                        </Col>
                                        <Col xs={'auto'}>
                                            <Button>Go to Projects</Button>
                                        </Col>
                                    </Row> {/** Head */}
                                    
                                    <Row className="open-project mt-3">
                                        <Col xs={6}>
                                            <Card style={{border: 'none'}}>
                                                <Card.Img variant="top" src="https://picsum.photos/200/100" />
                                                <Card.Body 
                                                    className="px-3 py-3"
                                                    style={{
                                                        borderRadius: "0 0 20px 20px",
                                                        boxShadow: "0px 5px 20px 0px #ddd"
                                                    }}
                                                >
                                                    <Card.Text className="mb-0">Sample project</Card.Text>
                                                    <Card.Text>January 30, 2021</Card.Text>

                                                </Card.Body>
                                            </Card>
                                        </Col>

                                        <Col xs={6}>
                                            <Card style={{border: 'none'}}>
                                                <Card.Img variant="top" src="https://picsum.photos/seed/picsum/200/100" />
                                                <Card.Body 
                                                    className="px-3 py-3"
                                                    style={{
                                                        borderRadius: "0 0 20px 20px",
                                                        boxShadow: "0px 5px 20px 0px #ddd"
                                                    }}
                                                >
                                                    <Card.Text className="mb-0">Sample project</Card.Text>
                                                    <Card.Text>January 30, 2021</Card.Text>

                                                </Card.Body>
                                            </Card>
                                        </Col>

                                    </Row> {/** open project */}
                                    
                                    <Row className="create-project mt-5">
                                        <Col xs={6}>
                                            <Card
                                                className="d-flex justify-content-center align-items-center"
                                                style={{ 
                                                    minWidth: '250px', minHeight:'250px',
                                                    borderRadius: '20px',
                                                    border: '2px dashed #ddd'
                                                }}>
                                                    + Create New Project
                                            </Card>
                                        </Col>
                                        <Col xs={6}>
                                            <Card
                                                className="d-flex justify-content-center align-items-center"
                                                style={{ 
                                                    minWidth: '250px', minHeight:'250px',
                                                    borderRadius: '20px',
                                                    border: '2px dashed #ddd'
                                                }}>
                                                    + Create New Project
                                            </Card>
                                        </Col>
                                    </Row> {/** create Project */}

                                </div> {/** projects */}

                                <div className="assets mt-5">

                                    <Row className="justify-content-between head">
                                        <Col>
                                            <h3 className="d-inline">Open Assets</h3>
                                        </Col>
                                    </Row> {/** Head */}

                                    <Row className="open-assets mt-3">
                                        <Col xs={6}>
                                            <Card style={{border: 'none'}}>
                                                <Card.Img variant="top" src="https://picsum.photos/200/100" />
                                                <Card.Body 
                                                    className="px-3 py-3"
                                                    style={{
                                                        borderRadius: "0 0 20px 20px",
                                                        boxShadow: "0px 5px 20px 0px #ddd"
                                                    }}
                                                >
                                                    <Card.Text className="mb-0">Sample project</Card.Text>
                                                    <Card.Text>January 30, 2021</Card.Text>

                                                </Card.Body>
                                            </Card>
                                        </Col>

                                        <Col xs={6}>
                                            <Card style={{border: 'none'}}>
                                                <Card.Img variant="top" src="https://picsum.photos/seed/picsum/200/100" />
                                                <Card.Body 
                                                    className="px-3 py-3"
                                                    style={{
                                                        borderRadius: "0 0 20px 20px",
                                                        boxShadow: "0px 5px 20px 0px #ddd"
                                                    }}
                                                >
                                                    <Card.Text className="mb-0">Sample project</Card.Text>
                                                    <Card.Text>January 30, 2021</Card.Text>

                                                </Card.Body>
                                            </Card>
                                        </Col>

                                    </Row> {/** open assets */}
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
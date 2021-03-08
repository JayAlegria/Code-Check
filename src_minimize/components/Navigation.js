import React from 'react'
import { Row, Col, Nav, NavDropdown } from 'react-bootstrap'
import LogoFace from './assets/images/logo-face.png'
import './Navigation.scss'


function Navigation() {
    return (
        <>
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
        </>
    )
}

export default Navigation

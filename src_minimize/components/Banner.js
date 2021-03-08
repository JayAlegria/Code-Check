import React from 'react'
import { Row, Col, Button, Card } from 'react-bootstrap'
import './Banner.scss'

function Banner() {
    return (
        <>
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
        </>
    )
}

export default Banner

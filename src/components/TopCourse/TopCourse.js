import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';

const TopCourse = ({ course }) => {
    const { image, courseName, price } = course || {};
    return (
        <div>
            <Col md={12} className="m-2 p-2 border border-3 rounded-3 shadow-lg" >
                <Card className="mx-auto">
                    <Card.Img variant="top" src={image} style={{ width: "100%", height: "200px" }} />
                    <Card.Body>
                        <Card.Title>{courseName}</Card.Title>
                        <Card.Text>
                            Course Fee: ${price}
                        </Card.Text>
                    </Card.Body>

                    <Button variant="success rounded-3 w-50 mx-auto">See Details</Button>

                </Card>
            </Col >

        </div >
    );
};

export default TopCourse;
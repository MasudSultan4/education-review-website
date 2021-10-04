import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Course.css';
const Course = (props) => {
    const { id,img, name, rating, price, title, course_timing, students_enrolled } = props.course
   
    return (

        <div className="col-md-4">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <h5>Subject: {name}</h5>
                    <p><small>{title}</small></p>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><strong>Rating:</strong>{rating}</ListGroupItem>
                    <ListGroupItem><strong>Course-Timing:</strong> {course_timing}</ListGroupItem>
                    <div className="">
                    <ListGroupItem className="d-flex mb-0">
                        <p className="gaping"> <strong>Price:</strong>${price}</p>
                        <p><strong>Enroll:</strong>{students_enrolled}</p>
                    </ListGroupItem>
                    </div>

                </ListGroup>
                <Card.Body>
                <Link to={`/details/${id}`}>
                    <Button className="btn btn-success">Details</Button>
                  </Link>
                </Card.Body>
            </Card>
        </div>

    );
};

export default Course;
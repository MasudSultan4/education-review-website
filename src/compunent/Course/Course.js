import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Course.css';
const Course = (props) => {
    const { img, name, price,course_timing, students_enrolled,lessons } = props.course

    return (
        <div className="col-md-4 mb-5">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title><strong>Subject:</strong> {name}</Card.Title> <hr />
                    
                    <h5><strong>Course-Timing:</strong> {course_timing}</h5><hr />
                    <div className="d-flex">
                        <h5 className="gaping"> <strong>Price:</strong>${price}</h5>
                        <h5><strong>Enroll:</strong>{students_enrolled}</h5>
                    </div><hr />
                    <p><strong>Lesson:</strong> {lessons}</p><hr />
                    <Button variant="primary">Enroll</Button>
                </Card.Body>
            </Card>
        </div>

    );
};

export default Course;
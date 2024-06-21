import React from 'react';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Singlecard = ({video}) => {
    console.log("🚀 ~ Singlecard ~ video:", video)
    // const {title,thumbnail} = video
    return (
            <>
                <Col style={{ marginBottom: '25px' }}>
                    <Link to={`/video/${video.id}`}>
                        <Card>
                            <Card.Img variant="top" src={video.thumbnail} />
                            <Card.Body>
                                <Card.Title style={{fontSize:"14px"}}>{video.title}</Card.Title>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>  
            </>
    );
};

export default Singlecard;
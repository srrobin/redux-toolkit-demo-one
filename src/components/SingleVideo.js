import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RelatedVideos from './RelatedVideos';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { videoAsync } from '../features/video/videoSlice';

const SingleVideo = () => {

    const dispatch = useDispatch();
    const {video}  = useSelector((state) => state.video)
    const {id} = useParams();

    useEffect(() => {
        dispatch(videoAsync(id));  
    },[dispatch, id]);

    return (
        <div style={{marginTop:"90px"}}>
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                        <div className="ratio ratio-16x9">
                            <iframe src={video.link} title="YouTube video" allowFullScreen ></iframe>
                        </div>
                        <h3>{video.title}</h3>
                    </Col> 

                    <Col xs={12} md={4}>
                       <RelatedVideos id={id} tags={video.tags}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SingleVideo;
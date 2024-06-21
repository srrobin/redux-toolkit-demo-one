import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { relatedVideosAsync } from '../features/relatedVideos/relatedVideosSlice';
import Loading from "../utils/Loading";
import { Link } from 'react-router-dom';

const RelatedVideos = ({id,tags}) => {
    const dispatch = useDispatch();
    const { relatedVideos,isLoading,isError,error } = useSelector((state) => state.relatedVideos)
    console.log("🚀 ~ RelatedVideos ~ relatedVideos:", relatedVideos)

    useEffect(() => {
         dispatch(relatedVideosAsync({id,tags}));
    },[dispatch,id,tags])

    let content;

    if(isLoading) content = <Loading/>
    if(!isLoading && isError) content = <>{error}</>; 
    if(!isLoading && !isError && relatedVideos.length === 0) content = <>no videos found</>;  
    if(!isLoading && !isError && relatedVideos.length > 0) content = relatedVideos?.map((video) => ( 
        <Col xs={12} md={12} key={video.id}>
        <Link to={`/video/${video.id}`}> 
        <div className="card mb-3" style={{maxWidth: "540px"}}>
        <div className="row g-0">
            <div className="col-md-4">
            <img src={video.thumbnail} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title" style={{fontSize:"12px"}}>{video.title}</h5>
            </div>
            </div>
        </div>
        </div>
        </Link>
    </Col>
    ))

    return (
        <Row>
            {content}        
        </Row>
    );
};

export default RelatedVideos;
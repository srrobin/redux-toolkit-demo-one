import React, { useEffect } from 'react';
import Singlecard from './Singlecard';
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { videosAsync } from '../features/videos/videosSlice';
import Loading from '../utils/Loading';
import Tags from './Tags';

const Cards = () => {
  const dispatch = useDispatch();
  const {videos,isLoading,isError,error} = useSelector((state) => state.videos)
  console.log("🚀 ~ Cards ~ videos:", videos)
  const {tags,search} = useSelector((state) => state.filter)

  useEffect(() => {
     dispatch(videosAsync({tags,search}));
  },[dispatch,tags,search])

  let content;

    if(isLoading) content = <Loading/>;
    if(!isLoading && isError) content = <> {error} </>
    if(!isLoading && !isError && videos.length === 0 ) content = <> No videos Found </>
    if(!isLoading && !isError && videos.length > 0 ) content = videos?.map((video) => ( <Singlecard key={video.id} video = {video}/>))


    return (
      <> 
      <Tags />
        <div style={{ marginTop:"50px"}}>
            <Container>
            <Row xs={1} md={3} lg={4} className="g-4">
                {content}
              </Row>
            </Container>
        </div>
      </>
    );
};

export default Cards;
import React, { useEffect } from 'react';
import {  Container, Stack } from 'react-bootstrap';
import Singletags from './Singletags';
import { useDispatch, useSelector } from 'react-redux';
import { tagsAsync } from '../features/tags/tagsSlice';

const Tags = () => {
    const dispatch = useDispatch();
    const {tags} = useSelector((store) => store.tags)
    console.log("🚀 ~ Tags ~ tags:", tags)

    useEffect(() => {
        dispatch(tagsAsync());
    },[dispatch])
    return (
        <div style={{ marginTop:"80px"}}>
            <Container> 
                <Stack direction="horizontal" gap={2}>
                    { tags.map((tag) => ( 
                    <Singletags key={tag.id} title={tag.title} />
                    ))}
                 
                    {/* <Singletags/> */}
                </Stack>
            </Container>
        </div>
    );
};

export default Tags;
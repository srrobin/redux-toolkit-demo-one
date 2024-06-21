import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useNavigate } from 'react-router-dom';
import { searched } from '../features/filter/filterSlice';

const SearchInput = () => {
    const dispatch = useDispatch();
    const {search} = useSelector((state) => state.filter); 
    const [input,setInput] = useState(search);
    const match = useMatch("/");
    const navigate = useNavigate();
    const handleubmit = (e) => {
        e.preventDefault()
        dispatch(searched(input));


        if(!match){
            navigate("/");
        }
    }
    return (
        <>
            <Form className="d-flex" onSubmit={handleubmit}>
                <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                name="search"
                value={input}
                onChange={(e) => setInput(e.target.value) }
                />
            </Form>    
        </>
    );
};

export default SearchInput;
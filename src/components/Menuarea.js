import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';

const Menuarea = () => {
    return (
        <div>
            <Navbar fixed="top" expand="lg" className=" bg-body-tertiary">
                <Container>
                    <Link to="/"> 
                      <Navbar.Brand>REDUX</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                    </Nav>
                    <SearchInput />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menuarea;
import React from'react'
import Header from '../components/Header.js'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from "gatsby"
import Head from '../components/Head.js';

class Global extends React.Component
{
    render()
    {
        return(
            <div>
                <Head/>
                <Header/>
                <Navbar sticky="top" bg="dark" variant="dark">
                    <Navbar.Brand as={Link} to="">{"{js}"}</Navbar.Brand>
                    <Nav>
                        <Nav.Link as={Link} to="posts">Posts</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Global;
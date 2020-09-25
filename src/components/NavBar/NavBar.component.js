import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function NavBar() {
    return (
        <>
            <Navbar bg="light" expand="lg" sticky="top">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/data/world">World data</Link>
                        <Link className="nav-link" to="/data/countries">Countries data</Link>
                        <Link className="nav-link" to="/data/continents">Continents data</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}
import {Navbar, Nav} from "react-bootstrap"
import React, { useState, useEffect } from "react";
import {getCookie, deleteCookie} from "../utils.js/cookie";
import { useHistory } from 'react-router-dom';


export default function(props){

    const [currUser, setCurrUser] = useState(getCookie("user"));
    const history = useHistory(); 


    useEffect(() => {
        setCurrUser(getCookie("user"));
    }, []);

    const handleBrandClick =(e)=>{
        e.preventDefault();
        if(currUser){
            deleteCookie("user");
            setCurrUser(null);
        } else {
            history.push("/login");
        }
    };
    return (
    
    <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#" onClick={handleBrandClick}>{currUser || "Log in"}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/weather">Weather</Nav.Link>
            </Nav>
        </Navbar.Collapse>

    </Navbar>
    )
}
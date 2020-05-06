import React, {useState} from "react";
import { useHistory } from 'react-router-dom';
import {Form, Button} from "react-bootstrap";
import useForm from "../../hooks/formHandlingHook";
import checkAuthData from "../../utils.js/auth";

import {getCookie, setCookie} from "../../utils.js/cookie";

import "./LoginPage.css";

function LoginPage(props) {
    const history = useHistory();
    const [validated, setValidated] = useState(false);
    const [showErrMess, setShowErrMess] = useState(false);

    const signup = (event) => {
        setValidated(true);
        setShowErrMess(false);

        if(checkAuthData(inputs.login, inputs.pass)){
            setCookie("user", inputs.login);
            history.push("/weather");
        } else {
            setShowErrMess(true);
            event.stopPropagation();
        }

    }

    const {inputs, handleInputChange, handleSubmit} = useForm(signup, setShowErrMess);
    
    if(getCookie("user")){
        console.log(getCookie("user"));
        history.push("/weather");

    }
        
    return (   
    
    <div id="loginForm">
        <Form onSubmit={handleSubmit} validated={validated}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Enter login:</Form.Label>
                <Form.Control type="text" placeholder="Login" name="login" value={inputs.login || ""} onChange={handleInputChange} required/>
                <Form.Control.Feedback type="invalid">
                    Please enter login.
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="pass" value={inputs.pass || ""} onChange={handleInputChange} required/>
                <Form.Control.Feedback type="invalid">
                    Please enter password.
                </Form.Control.Feedback>

            </Form.Group>
            
            {showErrMess ? invalidFormMessage() : "" }
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>);
}


function invalidFormMessage(){
    return (<p className="err-mess">{`Invalid login or password`}.</p>);
}


export default LoginPage;
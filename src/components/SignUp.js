import React, { useRef, useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from "../contexts/authContext"
import { useHistory, Link } from "react-router-dom"

export default function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordverifyRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault();
        setError("")

        if (passwordRef.current.value !== passwordverifyRef.current.value) {
            return setError("Passwords don't match");
        }

        try {
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        }
        catch (c) {
            console.log("Error", c.stack);
            console.log("Error", c.name);
            console.log("Error", c.message);
            setError("Invalid Email or Account already exists!")
        }

        setLoading(false)
        
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2> Sign Up</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id='password-verify'>
                            <Form.Label>Retype Password</Form.Label>
                            <Form.Control type='password' ref={passwordverifyRef} required />
                        </Form.Group>
                    <Button className="w-100" type="submit" disabled={loading}>Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div> Already have an account? <Link to="./login">Log In!</Link></div>
        </>
    )
}

import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "./context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const LogIn = () => {
  const authCtx = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSumbitLogin(e) {
    e.preventDefault();
    try {
      setError(null);
      setLoading(true);
      const response = await authCtx.login(
        emailRef.current.value,
        passwordRef.current.value
      );
      console.log("Login successful!");

      // Redirect to a specific route after successful login
      navigate("/dashboard"); // Change "/dashboard" to the desired route
    } catch (error) {
      setError("Failed to log in. Check your email and password.");
      console.error("Login error:", error);
    }

    setLoading(false);
  }

  return (
    <div className="maindiv">
      <div className="w-64 flex justify-center items-center">
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSumbitLogin}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Button disabled={loading} className="w-100" type="submit">
                Log In
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Don't have an account? <Link to="/">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

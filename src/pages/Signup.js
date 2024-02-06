import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSignup } from "../hooks/useSignup";
import Navi from "../components/Navbar";
import Alert from "react-bootstrap/Alert";

function Signup() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { signup, error } = useSignup();

  const handleSubmit = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    signup(userData.username, userData.email, userData.password);
    console.log(userData);
  };

  return (
    <>
      <Navi />
      <div className=" w-[70%] my-10 mx-auto">
        <h2>Signup Here</h2>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter username"
              name="username"
              onChange={handleSubmit}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={handleSubmit}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleSubmit}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Signup
          </Button>
          {error && <Alert variant={"danger"}>{error}</Alert>}
        </Form>
      </div>
    </>
  );
}

export default Signup;

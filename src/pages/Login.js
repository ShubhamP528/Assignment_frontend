import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSignin } from "../hooks/useLogin";
import Navi from "../components/Navbar";
import Alert from "react-bootstrap/Alert";

function Login() {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const { signin, errorL } = useSignin();

  const handleSubmit = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    signin(userData.email, userData.password);
    console.log(userData);
  };

  return (
    <>
      <Navi />
      <div className=" w-[70%] my-10 mx-auto">
        <h2>Login Here</h2>
        <Form onSubmit={submitHandler}>
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
            Login
          </Button>
          {errorL && <Alert variant={"danger"}>{errorL}</Alert>}
        </Form>
      </div>
    </>
  );
}

export default Login;

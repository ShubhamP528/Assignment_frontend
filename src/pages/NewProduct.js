import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navi from "../components/Navbar";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";
import { useAuthContext } from "../GlobleContext/AuthContext";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";
function NewProduct() {
  const { puser } = useAuthContext();
  const [errorL, setErrorL] = useState(null);
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: 0,
    rating: 0,
    company: "",
    feature: false,
  });
  const handleSubmit = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    axios
      .post(
        "/product",
        {
          product: product,
        },
        {
          headers: {
            Authorization: `Bearer ${puser.token}`,
          },
        }
      )
      .then((response) => {
        console.log(product);
        console.log(response);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data.error.message);
        setErrorL(err.response.data.error.message);
      });
  };

  return (
    <>
      <Navi />
      <div className=" w-[70%] my-10 mx-auto">
        <h2>Update Product</h2>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Product Name"
              name="name"
              onChange={handleSubmit}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Price</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Enter Price"
              name="price"
              onChange={handleSubmit}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Enter Rating"
              name="rating"
              onChange={handleSubmit}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Company</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Company"
              name="company"
              onChange={handleSubmit}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Feature</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Checkbox
                type="checkbox"
                onChange={handleSubmit}
                name="feature"
                aria-label="Checkbox for following text input"
              />
            </InputGroup>
          </Form.Group>

          <Button variant="primary" type="submit">
            Update Product
          </Button>
          {errorL && <Alert variant={"danger"}>{errorL}</Alert>}
        </Form>
      </div>
    </>
  );
}

export default NewProduct;

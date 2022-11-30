import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import logo from "../Assets/LogoTeltech2.png"

function Login() {
  return (
    <>
      <div
        className="container "
        style={{ width: "500px", marginTop: "200px"}}
      >
        <Form className="card p-5">
            <img src={logo}></img>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Login;

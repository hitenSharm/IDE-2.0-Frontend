import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./register.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Link,useHistory } from "react-router-dom";
import { registerUser } from "../../api/api";
import { NotificationContainer } from "react-notifications";
import createNotification from "../notifications";
import ReactTimeout from "react-timeout";

const Register = () => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);

    const res = await registerUser(formData);    
    var details = res.message;
    if (res.error == "success") {
      details += " Redirecting to login page!";
    }
    createNotification(res.error, details);
    if (res.error == "success") {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
  }
  return (
    <div className="Register">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoFocus
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Register
        </Button>
      </Form>
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <Row style={{ margin: "1em" }}>
          <Col xs={6} md={2} lg={7}>
            <Link to="/">Login</Link>
          </Col>
          <Col xs={6} md={2} lg={5}>
            <Link to="/ide">IDE</Link>
          </Col>
        </Row>
      </Container>
      <NotificationContainer />
    </div>
  );
};

export default Register;

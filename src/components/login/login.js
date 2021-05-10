import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Link,useHistory } from "react-router-dom";
import { loginUser } from "../../api/api";
import { NotificationContainer } from "react-notifications";
import createNotification from "../notifications";
import { useDispatch } from "react-redux";
import { loggingIn } from "../../actions";


const Login = () => {

  let history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  const sendToRedux = (obj) =>{
    dispatch(loggingIn(obj));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData();    
    formData.append("email", email);
    formData.append("password", password);

    const res= await loginUser(formData);    
    var details = res.message;    
    createNotification(res.error, details);
    
    if (res.error === "success") {
      setTimeout(() => {
        history.push("/ide");    
        var obj={
          name:res.name,
          email:res.email,
          token:res.token
        }
        sendToRedux(obj);    
      }, 3000);
    }

  }
  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
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
          Login
        </Button>
      </Form>
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <Row style={{ margin: "1em" }}>
          <Col xs={6} md={2} lg={7}>
            <Link to="/signup">Register</Link>
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

export default Login;

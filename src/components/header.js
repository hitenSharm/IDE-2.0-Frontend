import React, { useState } from "react";
import { Row, Col, Menu } from "antd";
import "antd/dist/antd.css";
 import { Link } from "react-router-dom";

const Header = () => {
  
  const style = {
    color: "white",
    fontFamily: "monospace",
    fontSize: "1.2em",
    backgroundColor: "#282c34",
  };
  const style2 = {
    color: "white",
    fontFamily: "monospace",
    fontSize: "1.2em",
    backgroundColor: "#282c34",
    margin: "0",
  };

  return (
    <div style={{ backgroundColor: "#282c34" }}>      
      <Row style={{ height: "100%"}}>
        <Col xxl={2} xl={2} lg={2} xs={1} md={2} sm={1} />
        <Col xxl={18} xl={18} lg={18} xs={22} md={20} sm={22}>
          <Menu
            mode="horizontal"
            theme="dark"
            style={{ border: 0, backgroundColor: "#282c34"}}
          >
            <Menu.Item style={style2}>
              <p style={style}><Link to="/" style={style}>CodeSave</Link></p>
            </Menu.Item>
            <Menu.Item style={style2}>
              <p style={style}><Link to="/" style={style}>Login</Link></p>
            </Menu.Item>
            <Menu.Item style={style2}>
              <p style={style}><Link to="/signup" style={style}>Sign Up</Link></p>
            </Menu.Item>
            <Menu.Item style={style2}>
              <p style={style}><Link to="/ide" style={style}>IDE</Link></p>
            </Menu.Item>
          </Menu>
        </Col>
        <Col xxl={4} xl={4} lg={4} xs={1} md={2} sm={1} />
      </Row>
    </div>
  );
};

export default Header;

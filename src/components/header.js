import React, { useEffect, useState } from "react";
import { Row, Col, Menu, Button } from "antd";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { loggingOut ,editCodeName ,editModeOff,removeCode,removeIdeCode } from "../actions";

const style = {
  color: "white",
  fontFamily: "monospace",
  fontSize: "1.2em",
  backgroundColor: "#282c34",
};
const style2 = {
  color: "white",
  fontFamily: "monospace",
  fontSize: "1.1em",
  backgroundColor: "#282c34",
  margin: "0",
};

const Header = () => {
  const userLog = useSelector((state) => state.userDetails.name);
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (userLog) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [userLog]);

  const logout = () =>{
    dispatch(loggingOut());
    dispatch(removeCode());
    dispatch(editModeOff());
    dispatch(editCodeName(""));
    dispatch(removeIdeCode("#code here"));
    setIsLoggedIn(false);
  }

  return (
    <div style={{ backgroundColor: "#282c34" }}>
      <Row style={{ height: "100%" }}>
        <Col xxl={2} xl={2} lg={2} xs={1} md={2} sm={1} />
        <Col xxl={18} xl={18} lg={18} xs={22} md={20} sm={22}>
          <Menu
            mode="horizontal"
            theme="dark"
            style={{ border: 0, backgroundColor: "#282c34" }}
          >
            <Menu.Item style={style2}>
              <p style={style}>
                <Link to="/" style={style}>
                  CodeSave
                </Link>
              </p>
            </Menu.Item>
            <Menu.Item style={style2}>
              <p style={style}>
                <Link to="/" style={style}>
                  Login
                </Link>
              </p>
            </Menu.Item>
            <Menu.Item style={style2}>
              <p style={style}>
                <Link to="/signup" style={style}>
                  Sign Up
                </Link>
              </p>
            </Menu.Item>
            <Menu.Item style={style2}>
              <p style={style}>
                <Link to="/ide" style={style}>
                  IDE
                </Link>
              </p>
            </Menu.Item>
            {isLoggedIn ? (
              <Menu.Item style={style2}>
                <p style={style}>
                  <Link to="/allcodes" style={style}>
                    My Codes
                  </Link>
                </p>
              </Menu.Item>
            ) : null}
            {isLoggedIn ? (<Menu.Item style={{float:"right"}}>
            <Button type="primary" style={{marginBottom:"1.4em"}} onClick={logout}>Logout</Button>
          </Menu.Item>):null}
          </Menu>
        </Col>
        <Col xxl={4} xl={4} lg={4} xs={1} md={2} sm={1} />
      </Row>
    </div>
  );
};

export default Header;

import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import CodeCard from "./cardComponent";
import { useDispatch, useSelector } from "react-redux";

const AllCodes = () => {
  const jwtToken = useSelector((state) => state.userDetails.token);
  const codes= useSelector((state) => state.codesInitial.metadata);
  const [isloggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (jwtToken) setLoggedIn(true);
    else setLoggedIn(false);
  });

  const mapCodes = () =>{      
      return codes.map((code)=>{
          console.log(code.lang);
          return (        
              <Col style={{ margin: "0.5em" }}>
                <CodeCard name={code.name} lang={code.lang} />
              </Col>            
          );
      })
  }

  return (
    <div style={{ textAlign: "center" }}>
      {isloggedIn ?<Row style={{ display: "flex", justifyContent: "center" }}>{mapCodes()}</Row> : (
        <h1
          style={{
            color: "ghostwhite",
            fontSize: "6.5em",
            fontFamily: "cursive",
          }}
        >
          LOG IN!!
        </h1>
      )}
    </div>
  );
};

export default AllCodes;

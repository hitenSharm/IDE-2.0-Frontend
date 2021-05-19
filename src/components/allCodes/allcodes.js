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
      if(typeof codes !=='undefined')   
      return codes.map((code)=>{          
          return (        
              <Col style={{ margin: "0.5em" }}>
                <CodeCard name={code.name} lang={code.lang} realCode={code.codeData || code.code} />
              </Col>            
          );
      })
      else
      {
        return <h1
        style={{
          color: "ghostwhite",
          fontSize: "6.5em",
          fontFamily: "cursive",
        }}
      >
        No codes
      </h1>
      }
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

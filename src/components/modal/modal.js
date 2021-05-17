import React from "react";
import Modal from "react-modal";
import { Row, Col, Button } from "antd";
import "antd/dist/antd.css";
import {CloseOutlined} from '@ant-design/icons';

const customStyles = { 
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor:"#29293d"
  },  
};

function NameBox() {
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "ghostwhite";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    
  );
}

export default NameBox;

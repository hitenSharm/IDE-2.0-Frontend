import React, { useEffect, useState } from "react";
import AceEditor from "react-ace";
import { Row, Col, Button, Select } from "antd";
import "antd/dist/antd.css";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-solarized_dark";
import { useDispatch, useSelector } from "react-redux";
import { changeCode, changeLang, saveCodeRedux } from "../../actions";
import { codeRun, saveCode } from "../../api/api";
import { NotificationContainer } from "react-notifications";
import createNotification from "../notifications";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import {CloseOutlined} from '@ant-design/icons';
import Modal from "react-modal";

const { Option } = Select;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#29293d",
  },
};

const IDE = () => {
  const dispatch = useDispatch();
  const codeIde = useSelector((state) => state.codeData);
  const langIde = useSelector((state) => state.langData);
  const userLog = useSelector((state) => state.userDetails.name);
  const jwtToken = useSelector((state) => state.userDetails.token);

  const [disableSave, setDisableSave] = useState(false);
  const [loadingState, setLoadingState] = useState(true);
  const [langMode, setLangMode] = useState(
    langIde == null ? "python" : langIde
  );
  const [inputVal, setInputVal] = useState();
  const [outPutVal, setOutVal] = useState();
  const [codeName, setCodeName] = useState();

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

  useEffect(() => {
    if (userLog) {
      setDisableSave(false);
    } else setDisableSave(true);
  }, [userLog]);  

  function onChange(newValue) {
    dispatch(changeCode(newValue));
  }

  function handleChange(value) {
    dispatch(changeLang(value));
    switch (value) {
      case "C++":
        setLangMode("c_cpp");
        break;
      case "Python":
        setLangMode("python");
        break;
      case "Javascript":
        setLangMode("javascript");
        break;
      default:
        break;
    }
  }

  const runCode = async () => {
    console.log("working...");
    setLoadingState(false);
    let formData = new FormData();
    formData.append("code", codeIde);
    formData.append("input", inputVal);
    formData.append("lang", langIde);
    var ans = await codeRun(formData);
    if (ans.error && ans.error === "error") {
      createNotification(ans.error, ans.message);
    } else {
      setOutVal(ans.toString());
    }
    setLoadingState(true);
  };

  const saveCodeForDb = async () => {
    setIsOpen(false); 
    console.log("saving!!");    
    setLoadingState(false);
    let formData = new FormData();
    formData.append("code", codeIde);
    formData.append("lang", langIde);
    formData.append("name", codeName);
    var tempCode={
      code:codeIde,
      lang:langIde,
      name:codeName
    }
    dispatch(saveCodeRedux(tempCode))
    var saving = await saveCode(formData, jwtToken);
    if (saving.error && saving.error === "error") {
      createNotification(saving.error, saving.message);
    } else {
      createNotification(saving.error, saving.message);
    }
    setLoadingState(true);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {!loadingState ? (
          <Loader
            type="MutatingDots"
            color="#00BFFF"
            height={100}
            width={100}
          />
        ) : null}
      </div>
      <Row>
        <Col>
          <div>
            {/* <button onClick={openModal}>Open Modal</button> */}
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Code Details"
            >
              <Row>
                <Col style={{ margin: "1em" }}>
                  <h2
                    ref={(_subtitle) => (subtitle = _subtitle)}
                    style={{ color: "ghostwhite" }}
                  >
                    Save Code
                  </h2>
                </Col>
                <Col>
                  <Button onClick={closeModal} type="primary">
                    <CloseOutlined />
                  </Button>
                </Col>
              </Row>
              <div style={{ color: "ghostwhite" }}>Type Name</div>
              <form>
                <input onChange={(e)=>setCodeName(e.target.value)} />
                <Button type="primary" onClick={(e)=>{saveCodeForDb()}}>Save Code!</Button>
              </form>
            </Modal>
          </div>
          <AceEditor
            mode={langMode}
            theme="monokai"
            fontSize="16px"
            onChange={onChange}
            editorProps={{ $blockScrolling: true }}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
            }}
            width="1000px"
            height="600px"
            value={codeIde}
          />
        </Col>
        <Col>
          <Row style={{ margin: "0.5em" }}>
            <Col>
              <AceEditor
                mode="text"
                theme="terminal"
                name="code-results"
                fontSize="14px"
                showPrintMargin={false}
                showGutter={false}
                highlightActiveLine={false}
                readOnly={true}
                value={outPutVal}
                placeholder="Output here"
                editorProps={{ $blockScrolling: true }}
                width="500px"
                height="200px"
              />
            </Col>
          </Row>
          <Row style={{ margin: "0.5em" }}>
            <Col>
              <AceEditor
                mode="text"
                theme="solarized_dark"
                fontSize="14px"
                name="code-results"
                showPrintMargin={false}
                showGutter={false}
                highlightActiveLine={false}
                placeholder="Input here"
                editorProps={{ $blockScrolling: true }}
                width="500px"
                height="200px"
                value={inputVal}
                onChange={(val) => setInputVal(val)}
              />
              <Button
                type="primary"
                style={{ margin: "0.5em" }}
                onClick={(e) => {
                  e.preventDefault();
                  runCode();
                }}
              >
                Compile Code
              </Button>
              <Button
                type="primary"
                style={{ margin: "1em" }}
                disabled={disableSave}
                onClick={(e) => {
                  e.preventDefault();                  
                  openModal();
                }}
              >
                Save Code
              </Button>
              <Select
                defaultValue={langIde == null ? "Lanauge" : langIde}
                style={{ width: 120 }}
                onChange={handleChange}
              >
                <Option value="C++">C++</Option>
                <Option value="Python">Python</Option>
                {/* <Option value="Javascript">Javascript</Option> */}
              </Select>
            </Col>
          </Row>
        </Col>
      </Row>
      <NotificationContainer />
    </div>
  );
};

export default IDE;

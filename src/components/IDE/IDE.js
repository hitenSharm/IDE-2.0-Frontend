import React, { useState } from "react";
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
import { changeCode, changeLang } from "../../actions";
import { codeRun } from "../../api/api";

const { Option } = Select;

const IDE = () => {
  const dispatch = useDispatch();
  const codeIde = useSelector((state) => state.codeData);
  const langIde = useSelector((state) => state.langData);

  const [langMode,setLangMode]=useState(langIde == null ? "python" : langIde);
  const [inputVal,setInputVal]=useState();

  function onChange(newValue) {
    dispatch(changeCode(newValue));
  }

  function handleChange(value) {    
    dispatch(changeLang(value));
    switch (value) {
      case "C++":
        setLangMode("c_cpp")
        break;
      case "Python":
        setLangMode("python")
        break;
      case "Javascript":
        setLangMode("javascript")
        break;
      default:
        break;
    }
  }

  const runCode = async () =>{
    console.log("working?")
    let formData = new FormData();    
    formData.append("code",codeIde);
    formData.append("input",inputVal);
    console.log(formData);
    var ans = await codeRun(formData);
    console.log(ans);
  }

  return (
    <div>
      <Row>
        <Col>
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
                onChange={(val)=>setInputVal(val)}
              />
              <Button type="primary" style={{ margin: "0.5em" }} onClick={(e)=>{
                e.preventDefault();
                runCode();
              }}>
                Compile Code
              </Button>
              <Button type="primary" style={{ margin: "1em" }}>
                Save Code
              </Button>
              <Select
                defaultValue={langIde == null ? "Lanauge" : langIde}
                style={{ width: 120 }}
                onChange={handleChange}
              >
                <Option value="C++">C++</Option>
                <Option value="Python">Python</Option>
                <Option value="Javascript">Javascript</Option>
              </Select>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default IDE;

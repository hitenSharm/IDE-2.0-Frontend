import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";

const IDE = () => {
    function onChange(newValue) {
        console.log("change", newValue);
      }
      
  return (
    <div>
      {/* <AceEditor
        mode="python"
        theme="monokai"
        onChange={onChange}        
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
      /> */}
    </div>
  );
};

export default IDE;

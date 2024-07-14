import React, { useState } from "react";

function Box({ currentState, changeTurn, row, col ,isAddable}) {
  const [text, setText] = useState("");
  const [boxClassName,setBoxClassName]=useState("box box-red");

  function toggleText() {
    if (isAddable) {
      if (text === "") {
        setText(currentState);
        changeTurn(row, col);
        setBoxClassName(currentState === "X" ? "box box-red" : "box box-blue")
      }
    }
    
  }
  return (
    <div className={boxClassName} onClick={toggleText}>
      {text}
    </div>
  );
}

export default Box;

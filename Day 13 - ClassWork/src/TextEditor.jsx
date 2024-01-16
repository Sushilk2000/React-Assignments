import { useState } from "react";

function TextEditor() {
  const [inputText, setInputText] = useState("");
  function handleInputChange(e) {
    setInputText(e.target.value);
    console.log(inputText);
  }
  function handleUpperCase() {
    if (inputText !== "") {
      setInputText(inputText.toUpperCase());
    }
  }
  function handleLowerCase() {
    if (inputText !== "") {
      setInputText(inputText.toLowerCase());
    }
  }
  function handleClearText() {
    if (inputText !== "") {
      setInputText("");
    }
  }

  return (
    <>
      <div className="flex flex-col">
        <label htmlFor="InputText">Enter Your Text Here</label>
        <textarea
          name="InputText"
          id="InputText"
          cols="20"
          rows="5"
          className="ml-24 mr-24 border border-black"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Input here...."
        ></textarea>
      </div>
      <div>
        <button onClick={handleUpperCase} className="btn btn-primary">
          UPPERCASE
        </button>
        <button onClick={handleLowerCase} className="btn btn-secondary">
          lowercase
        </button>
        <button onClick={handleClearText} className="btn btn-success">
          cleartext
        </button>
      </div>
      <div className="flex flex-col mt-16">
        <label htmlFor="Outputtext">Your Output here</label>
        <textarea
          name="Outputtext"
          id="Outputtext"
          cols="20"
          rows="5"
          className="ml-24 mr-24 border border-black"
          value={inputText}
          readOnly
          placeholder="Output here..."
        ></textarea>
      </div>
    </>
  );
}

export default TextEditor;

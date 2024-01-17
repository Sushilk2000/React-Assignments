import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TextEditor() {
  const [inputText, setInputText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [readingTime, setReadingTime] = useState(0);

  const showToast = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      style: {
        background: "#28a745",
        color: "#fff",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
      },
    });
  };

  function handleInputChange(e) {
    const newText = e.target.value;
    setInputText(newText);
    updateCounts(newText);
  }

  function handleUpperCase() {
    if (inputText !== "") {
      const upperCaseText = inputText.toUpperCase();
      setInputText(upperCaseText);
      updateCounts(upperCaseText);
      showToast("Text converted to UPPERCASE!");
    } else {
      showErrorAlert("Please enter some text first.");
    }
  }

  function handleLowerCase() {
    if (inputText !== "") {
      const lowerCaseText = inputText.toLowerCase();
      setInputText(lowerCaseText);
      updateCounts(lowerCaseText);
      showToast("Text converted to lowercase!");
    } else {
      showErrorAlert("Please enter some text first.");
    }
  }

  function handleClearText() {
    if (inputText !== "") {
      setInputText("");
      updateCounts("");
      showToast("Text cleared!");
    } else {
      showErrorAlert("Text is already empty.");
    }
  }

  function handleCopyToClipboard() {
    if (inputText !== "") {
      const textarea = document.getElementById("Outputtext");
      textarea.select();
      document.execCommand("copy");
      showToast("Text copied to clipboard!");
    } else {
      showErrorAlert("Please enter some text first.");
    }
  }

  function handleRemoveExtraSpaces() {
    if (inputText !== "") {
      const textWithoutExtraSpaces = inputText.replace(/\s+/g, " ");
      setInputText(textWithoutExtraSpaces);
      updateCounts(textWithoutExtraSpaces);
      showToast("Extra spaces removed!");
    } else {
      showErrorAlert("Please enter some text first.");
    }
  }

  function showErrorAlert(message) {
    toast.error(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      style: {
        background: "#dc3545",
        color: "#fff",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
      },
    });
  }

  function formatReadingTime(time) {
    return time < 1 ? `${time * 1000} milliseconds` : `${time} seconds`;
  }

  function updateCounts(text) {
    const textWithoutExtraSpaces = text.replace(/\s+/g, "");
    const words = textWithoutExtraSpaces
      .trim()
      .split(/\s+/)
      .filter(Boolean).length;
    const characters = textWithoutExtraSpaces.length;
    const timeInSeconds = characters / 200;

    setWordCount(words);
    setCharCount(characters);
    setReadingTime(timeInSeconds);
  }

  return (
    <div className="app-container">
      <div className="flex flex-col items-center">
        <label htmlFor="InputText" className="text-2xl font-bold mb-2">
          Enter Your Text Here
        </label>
        <textarea
          name="InputText"
          id="InputText"
          cols="100"
          rows="5"
          className="mb-4 border border-black px-2 py-1 text-black text-l font-semibold font-serif"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Input here...."
        ></textarea>
      </div>
      <div className="flex justify-center space-x-4">
        <button onClick={handleUpperCase} className="btn btn-primary">
          UPPERCASE
        </button>
        <button onClick={handleLowerCase} className="btn btn-secondary">
          lowercase
        </button>
        <button onClick={handleClearText} className="btn btn-success">
          cleartext
        </button>
        <button onClick={handleCopyToClipboard} className="btn btn-info">
          Copy to Clipboard
        </button>
        <button onClick={handleRemoveExtraSpaces} className="btn btn-warning">
          Remove Extra Spaces
        </button>
      </div>
      <div className="text-white mt-4">
        <p>Number of Words: {wordCount}</p>
        <p>Number of Characters: {charCount}</p>
        <p>Reading Time Required: {formatReadingTime(readingTime)}</p>
      </div>
      <div className="flex flex-col mt-4 items-center">
        <label htmlFor="Outputtext" className="text-2xl font-bold mb-2">
          Your Output here
        </label>
        <textarea
          name="Outputtext"
          id="Outputtext"
          cols="100"
          rows="5"
          className="mb-4 border border-black px-2 py-1 text-black text-l font-semibold font-serif"
          value={inputText}
          readOnly
          placeholder="Output here..."
        ></textarea>
      </div>
      <ToastContainer />
    </div>
  );
}

export default TextEditor;

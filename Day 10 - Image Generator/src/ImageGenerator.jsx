import { useEffect, useState } from "react";
import axios from "axios";

const ImageGenerator = ({ setPicture }) => {
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
    console.log("Input Changed", inputText);
  };

  const generateImage = () => {
    setPicture("");
    getPicture();
  };

  const getPicture = async () => {
    setLoading(true);

    try {
      const params = new URLSearchParams();
      params.append("inputs", inputText);
      const data = params.toString();

      const config = {
        method: "post",
        url: "https://api-inference.huggingface.co/models/prompthero/openjourney-v4",
        headers: {
          Authorization: "Bearer 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",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: data,
        responseType: "blob",
      };

      const response = await axios(config);
      const url = URL.createObjectURL(response.data);

      setPicture(url);
      setError(false);
    } catch (error) {
      setError(true);
      setErrorMessage(error.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("Input Text:", inputText);
  }, [inputText]);

  return (
    <>
      <div className="flex gap-8 justify-center items-center">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          className="btn w-1/4 border border-black"
        />
        <button onClick={generateImage} className="btn btn-success">
          Generate
        </button>
      </div>
      <div className="flex justify-center h-12 items-center">
        {loading && (
          <span className="loading loading-spinner loading-lg"></span>
        )}
        {error && (
          <p className="text-red-500 text-xl text-center font-bold py-4">
            {errorMessage}
          </p>
        )}
      </div>
    </>
  );
};

export default ImageGenerator;

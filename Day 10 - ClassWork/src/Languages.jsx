import { useEffect, useState } from "react";
import Language from "./Language";
function Languages() {
  const [Languages, setLanguages] = useState([]);
  const [InputLang, setInputLang] = useState("en");
  const [OutputLang, setOutputLang] = useState("en");
  const [InputText, setInputText] = useState("");
  const [OutputText, setOutputText] = useState("");
  useEffect(() => {
    async function FetchData() {
      try {
        const response = await fetch("https://libretranslate.com/languages");
        const data = await response.json();
        setLanguages(data);
      } catch (error) {
        console.log(error);
      }
    }
    FetchData();
  }, []);
  const handleInputChange = (e) => {
    setInputLang(e.target.value);
    handleOutputChange(e);
  };
  const handleOutputChange = (e) => {
    setOutputLang(e.target.value);
  };
  const handleInputText = (e) => {
    setInputText(e.target.value);
    setOutputText(e);
  };
  const handleOutputText = (e) => {
    setOutputText(e.target.value);
  };

  const handleTranslate = async () => {
    try {
      const response = await fetch("https://libretranslate.com/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          q: inputText,
          source: inputLang,
          target: outputLang,
        }),
      });
      const data = await response.json();
      setOutputText(data.translatedText);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(1);
  }, [OutputLang]);

  useEffect(() => {
    console.log("Input Language:", InputLang);
  }, [InputLang]);
  useEffect(() => {
    console.log("Input Text:", InputText);
  }, [InputText]);
  useEffect(() => {
    console.log("Output Text:", OutputText);
  }, [OutputText]);

  return (
    <div>
      <div>
        <select
          name="inputLang"
          id="inputLanguage"
          onChange={handleInputChange}
        >
          {Languages.map((language) => (
            <Language
              key={language.code}
              code={language.code}
              name={language.name}
            />
          ))}
        </select>
        <input type="text" onChange={handleInputText} />
      </div>
      <div>
        <select
          name="outputLang"
          id="outputLanguage"
          onChange={handleOutputChange}
        >
          {Languages.map((language) => (
            <Language
              key={language.code + language.name}
              code={language.code}
              name={language.name}
            />
          ))}
        </select>
        <input type="text" onChange={handleOutputText} />
      </div>
      <button onClick={handleAns}>Translate Text</button>
    </div>
  );
}
export default Languages;

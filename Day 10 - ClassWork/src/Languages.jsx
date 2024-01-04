import { useEffect, useState } from "react";
import Language from "./Language";
function Languages() {
  const [Languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function FetchData() {
      try {
        const response = await fetch("https://libretranslate.com/languages");
        const data = await response.json();
        setLanguages(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    FetchData();
  }, []);
  return (
    <div>
      <select
        name="Languages"
        id="inputLanguage"
        onChange={console.log("hgvf")}
      >
        {Languages.map((language) => (
          <Language
            key={language.code}
            code={language.code}
            name={language.name}
          />
        ))}
      </select>
    </div>
  );
}
export default Languages;

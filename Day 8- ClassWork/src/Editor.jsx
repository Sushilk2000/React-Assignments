import Showdown from "showdown";
import ReactMde from "react-mde";
import { useState } from "react";

function Editor(props) {
  const [selectedTab, setSelectedTab] = useState("write");

  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  });
  return (
    <div className="w-full h-[100vh]">
      <ReactMde
        value={props.currentNote.body}
        onChange={props.updateNote}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(converter.makeHtml(markdown))
        }
        minEditorHeight={80}
        heightUnits="vh"
      ></ReactMde>
    </div>
  );
}

export default Editor;

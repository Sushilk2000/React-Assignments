import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
function Sidebar(props) {
  const noteList = props.notes.map((note) => (
    <li key={note.id} onClick={() => props.setCurrentNoteId(note.id)}>
      <span>{note.body.split("\n")[0]}</span>
      <button onClick={(event) => props.deleteNote(event, note.id)}>
        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
      </button>
    </li>
  ));
  return (
    <section className="w-[20%] h-[100vh]">
      <div className="flex items-center gap-4 p-8 h-[10vh]">
        <h1 className="text-black text-2xl font-serif uppercase">Notes</h1>
        <button
          className="w-6 h-6 flex justify-center items-center text-white bg-blue-700 text-2xl border-none rounded-[50%] cursor-pointer hover:text-black"
          onClick={props.newNote}
        >
          +
        </button>
      </div>
      <ul className="flex flex-col justify-center items-center">{noteList}</ul>
    </section>
  );
}

export default Sidebar;

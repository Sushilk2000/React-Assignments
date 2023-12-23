const Inputs = ({ setPlanner }) => {
  const addSubject = () => {
    const subject = document.getElementById("subject");
    const hours = document.getElementById("hours");

    if (!subject.value && !hours.value) {
      subject.classList.add("input-error");
      hours.classList.add("input-error");
    } else {
      subject.classList.remove("input-error");
      hours.classList.remove("input-error");
    }
    if (!subject.value) {
      subject.classList.add("input-error");
      return;
    }
    if (!hours.value) {
      hours.classList.add("input-error");
    }
    if (hours.value < 1 || hours.value > 12) {
      hours.classList.add("input-error");
      alert("Please enter value between 1 and 12");
      return;
    }
    const planner = JSON.parse(localStorage.getItem("planner")) || [];
    planner.push({ subject: subject.value, hours: hours.value });

    localStorage.setItem("planner", JSON.stringify(planner));
    subject.value = "";
    hours.value = "";
    setPlanner(true);
  };
  return (
    <div className="flex gap-4 mb-8 flex-wrap justify-center items-center mt-16">
      <input
        type="text"
        id="subject"
        name="subject"
        className="w-full max-w-xs border h-12 rounded-xl pl-2 font-bold border-black"
        placeholder="Enter Subject"
      />
      <input
        type="number"
        inputMode="numeric"
        name="hours"
        id="hours"
        className="input input-bordered w-20 border h-12 rounded-xl pl-2 font-bold border-black"
        placeholder="HH"
        min={1}
        max={12}
      />
      <button
        className="bg-blue-700  px-6 text-white border h-12 rounded-xl font-bold border-blue-700"
        onClick={addSubject}
      >
        Add
      </button>
    </div>
  );
};

export default Inputs;

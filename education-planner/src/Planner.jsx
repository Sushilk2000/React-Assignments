const Planner = ({ setPlanner }) => {
  const subjects = JSON.parse(localStorage.getItem("planner"));
  setPlanner(false);

  const increaseValue = (index) => () => {
    if (subjects[index].hours === 12) {
      return;
    }
    subjects[index].hours++;
    localStorage.setItem("planner", JSON.stringify(subjects));
    setPlanner(true);
  };
  const decreaseValue = (index) => () => {
    if (subjects[index].hours === 1) {
      return;
    }
    subjects[index].hours--;
    localStorage.setItem("planner", JSON.stringify(subjects));
    setPlanner(true);
  };
  return (
    <div id="planner" className=" mx-auto mt-12 w-[32rem]">
      <div className="overflow-x-auto">
        <table className="table text-lg text-center mx-auto">
          <thead>
            <tr>
              <th>Subject Name</th>
              <th>Hours</th>
            </tr>
          </thead>
          <tbody>
            {subjects?.map((subject, index) => (
              <tr key={index}>
                <td className="font-semibold text-red-500">
                  {subject.subject}
                </td>
                <td className="flex justify-center">
                  <button
                    className="btn btn-sm btn-error mr-2"
                    onClick={decreaseValue(index)}
                  >
                    -
                  </button>
                  <p className="inline-block w-8 text-red-500">
                    {subject.hours}
                  </p>
                  <button
                    className="btn btn-sm btn-success mx-2"
                    onClick={increaseValue(index)}
                  >
                    +
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Planner;

import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddPerson() {
  const getInitialData = () => {
    const storedData = localStorage.getItem("persons");
    return storedData ? JSON.parse(storedData) : [];
  };

  const [data, setData] = useState(getInitialData);

  const nameRef = useRef();
  const numRef = useRef();
  const addarRef = useRef();
  const ageRef = useRef();

  const SaveData = (e) => {
    e.preventDefault();
    const obj = {
      name: nameRef.current.value,
      number: numRef.current.value,
      addar: addarRef.current.value,
      age: ageRef.current.value,
    };

    // Validate the form fields
    if (!obj.name || !obj.number || !obj.addar || !obj.age) {
      // Use toast.error to display an error message
      toast.error("Form submission failed. Please check your input.");
      return;
    }

    // Update local storage
    const newData = [...data, obj];
    const stringify = JSON.stringify(newData);
    localStorage.setItem("persons", stringify);

    // Update state using the callback version of setData
    setData((prevData) => [...prevData, obj]);

    // Clear the input fields
    nameRef.current.value = "";
    numRef.current.value = "";
    addarRef.current.value = "";
    ageRef.current.value = "";

    // Use toast.success to display a success message
    toast.success("Form submitted successfully!");

    // Reload the page after a short delay (you can adjust the delay as needed)
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <>
      <form onSubmit={(e) => SaveData(e)} className="border border-black py-2 px-1 flex gap-4 items-center">
        <label htmlFor="Name">Name: </label>
        <input type="text" ref={nameRef} required id="Name" className="border-black border" />
        <label htmlFor="Number">Number: </label>
        <input type="number" ref={numRef} required maxLength={9999999999} minLength={1000000000}  className="border-black border" id="Number" />
        <label htmlFor="AddarCard">Adhar Number: </label>
        <input type="number" id="AddarCard" required minLength={100000000000} maxLength={999999999999999}  className="border-black border" ref={addarRef} />
        <label htmlFor="Age">Age: </label>
        <input type="number" id="Age" required min={1} ref={ageRef}  className="border-black border" />
        <input type="submit" value={"Add"} className="btn btn-success px-7 py-1" />
      </form>
    </>
  );
}

export default AddPerson;

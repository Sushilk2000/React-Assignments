import { FaMinusCircle } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";

import Button from "./Button";

import generator from "./Generator";

import { useState, useCallback, useRef } from "react"; // Import useCallback and useRef
import Checkboxes from "./Checkboxes";

const Inputs = () => {
  const [password, setPassword] = useState("");
  const [limit, setLimit] = useState(12);

  // Use useRef for accessing the input element
  const limitInputRef = useRef();

  const handleIncreaseLimit = useCallback(() => {
    if (limit < 128) {
      setLimit((prev) => Number(prev) + 1);
    } else {
      alert("Password length cannot be greater than 128");
      setLimit(128);
    }
  }, [limit]);

  const handleDecreaseLimit = useCallback(() => {
    if (limit > 1) {
      setLimit((prev) => Number(prev) - 1);
    } else {
      alert("Password length cannot be less than 1");
      setLimit(1);
    }
  }, [limit]);

  const handleOnLimitChange = useCallback((e) => {
    const newLimit = Number(e.target.value);
    if (newLimit > 128) {
      alert("Password length cannot be greater than 128");
      setLimit(128);
    } else if (newLimit < 1) {
      alert("Password length cannot be less than 1");
      setLimit(1);
    } else {
      setLimit(newLimit);
    }
  }, []);

  const generatePassword = useCallback(() => {
    const generatedPassword = generator(limit);
    setPassword(generatedPassword);
  }, [limit]);

  const copyPassword = useCallback(() => {
    navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <h2 className="mb-4 font-medium font-lg">Choose a password length</h2>
      <div className="flex gap-4 mb-4">
        <button
          className="w-12 font-bold btn btn-primary"
          onClick={handleDecreaseLimit}
        >
          <FaMinusCircle />
        </button>
        <input
          type="number"
          inputMode="numeric"
          id="length"
          className="input input-bordered [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-16 text-center font-bold btn"
          min="0"
          max={"128"}
          value={limit}
          onChange={handleOnLimitChange}
          ref={limitInputRef} // Attach the ref to the input element
        />
        <button
          className="w-12 font-bold btn btn-primary"
          onClick={handleIncreaseLimit}
        >
          <FaPlusCircle />
        </button>
      </div>
      <Checkboxes />
      <Button
        name="Generate Password"
        twclass="mt-6 mb-4 btn-success text-lg font-semibold"
        onClick={generatePassword}
      />
      <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
        <input
          type="text"
          className="input input-bordered"
          value={password}
          readOnly
        />
        <Button
          name={"Copy Password"}
          twclass={"btn-primary btn"}
          onClick={copyPassword}
        />
      </div>
    </>
  );
};

export default Inputs;

import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Retrieve({ data }) {
  const [searchNumber, setSearchNumber] = useState('');
  const [foundPerson, setFoundPerson] = useState(null);

  const handleSearch = () => {
    const person = data.find((person) => person.number === searchNumber);
    setFoundPerson(person);

    if (!person) {
      // Show error toast if no matching person is found
      toast.error('Person Not Found', {
        position: 'top-right',
        autoClose: 3000, // Auto close the toast after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: '#ff5c5c', // Error background color
          color: 'black'
        },
      });
    }
  };

  return (
    <div className='flex-col p-4 px-6 flex justify-between w-1/2 items-center font-semibold'>
      <div className='flex items-center gap-6'>
      <label htmlFor="searchNumber">Search by Number: </label>
      <input 
      className='border-black border p-2 w-[20rem]'
        type="number"
        placeholder='enter phone number'
        id="searchNumber"
        value={searchNumber}
        onChange={(e) => setSearchNumber(e.target.value)}
      />
      <button onClick={handleSearch} className='btn btn-success px-6'>Search</button>
      </div>

      {foundPerson && (
        <div className='flex mt-16 font-bold text-l gap-6 border-black border p-6 px-8'>
          <p>Name: {foundPerson.name}</p>
          <p>Number: {foundPerson.number}</p>
          <p>Adhar: {foundPerson.addar}</p>
          <p>Age: {foundPerson.age}</p>
        </div>
      )}
 
      <ToastContainer />
    </div>
  );
}
export default Retrieve;
import React from 'react';

function Display({ data, onDelete }) {
  const handleDelete = (index) => {
    onDelete(index);
  };

  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Number</th>
          <th>Addar</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((person, index) => (
          <tr key={index}>
            <td>{person.name}</td>
            <td>{person.number}</td>
            <td>{person.addar}</td>
            <td>{person.age}</td>
            <td>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Display;

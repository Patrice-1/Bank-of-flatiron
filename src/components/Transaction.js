import React from "react";

function Transaction( transaction, onDelete ) {
  const { date, description, category, amount } = transaction;
  const handleDelete = () => {
    if (onDelete) onDelete(id);
  };
  
  return (
    
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>
        <button onClick={handleDelete} className="ui button red">Delete</button>
      </td>
    </tr>
  );
}

export default Transaction;

import React from "react";

const Card = ({ card, onDelete, onEdit }) => {

  const handleEdit = () => {
    const newText = prompt("Edit task:", card.text);
    if (newText !== null && newText.trim() !== "") onEdit(newText);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this card?")) {
      onDelete();
    }
  };

  return (
    <div className="card">
      <p>{card.text}</p>
      <div className="card-buttons">
        <button onClick={handleEdit}>✏️</button>
        <button onClick={handleDelete}>🗑️</button>
      </div>
    </div>
  );
};

export default Card;

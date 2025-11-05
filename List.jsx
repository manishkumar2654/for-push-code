import React, { useState } from "react";
import Card from "./Card";
import { Droppable, Draggable } from "@hello-pangea/dnd";

const List = ({ list, addCard, deleteCard, editCard }) => {
  const [text, setText] = useState("");

  const handleAddCard = () => {
    if (!text.trim()) return;
    addCard(list._id, text);
    setText("");
  };

  return (
    <Droppable droppableId={list._id}>
      {(provided) => (
        <div className="list" {...provided.droppableProps} ref={provided.innerRef}>
          <h3>{list.title}</h3>

          {list.cards.map((card, index) => (
            <Draggable key={card._id} draggableId={card._id} index={index}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                  <Card
                    card={card}
                    onDelete={() => deleteCard(list._id, card._id)}
                    onEdit={(newText) => editCard(list._id, card._id, newText)}
                  />
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}

          <div className="add-card">
            <input
              type="text"
              placeholder="Add task..."
              value={text}
              onChange={e => setText(e.target.value)}
            />
            <button onClick={handleAddCard}>Add</button>
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default List;

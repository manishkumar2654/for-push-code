import React, { useEffect, useState } from "react";
import axios from "axios";
import List from "../components/List";
import { DragDropContext } from "@hello-pangea/dnd";
import "../Css/Home.css";

const Home = () => {
  const [lists, setLists] = useState([]);
  const [newListTitle, setNewListTitle] = useState("");

  useEffect(() => {
    fetchLists();
  }, []);

  const fetchLists = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/board");
      setLists(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addList = async () => {
    if (!newListTitle.trim()) return;
    try {
      const res = await axios.post("http://localhost:5000/api/board/list", { title: newListTitle });
      setLists(prev => [...prev, res.data]);
      setNewListTitle("");
    } catch (error) {
      console.log(error);
    }
  };

  const addCard = async (listId, text) => {
    if (!text.trim()) return;
    try {
      const res = await axios.post(`http://localhost:5000/api/board/card/${listId}`, { text });
      setLists(res.data);
    } catch (error) {
      console.log(error);
    }
  };

const deleteCard = async (listId, cardId) => {
  try {
    const res = await axios.delete(`http://localhost:5000/api/board/card/${listId}/${cardId}`);
    setLists(res.data);
  } catch (err) {
    console.log(err);
  }
};


  const editCard = async (listId, cardId, newText) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/board/card/${listId}/${cardId}`, { text: newText });
      setLists(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onDragEnd = async (result) => {
    const { source, destination, draggableId } = result;
    if (!destination) return;
    if (source.droppableId === destination.droppableId && source.index === destination.index) return;

    const updatedLists = [...lists];
    const sourceListIndex = updatedLists.findIndex(l => l._id === source.droppableId);
    const destListIndex = updatedLists.findIndex(l => l._id === destination.droppableId);
    const movedCard = updatedLists[sourceListIndex].cards.splice(source.index, 1)[0];
    updatedLists[destListIndex].cards.splice(destination.index, 0, movedCard);
    setLists(updatedLists);

    try {
      await axios.put("http://localhost:5000/api/board/moveCard", {
        cardId: draggableId,
        fromListId: source.droppableId,
        toListId: destination.droppableId,
        newIndex: destination.index
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home">
      <h2>🧩 Mini Trello Board</h2>
      <div className="add-list">
        <input
          type="text"
          placeholder="New list title..."
          value={newListTitle}
          onChange={e => setNewListTitle(e.target.value)}
        />
        <button onClick={addList}>Add List</button>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="board">
          {lists.map(list => (
            <List
              key={list._id}
              list={{ ...list, cards: list.cards.sort((a,b) => a.order - b.order) }}
              addCard={addCard}
              deleteCard={deleteCard}
              editCard={editCard}
            />
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Home;

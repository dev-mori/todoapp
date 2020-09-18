import React from "react";

const Item = ({ content, id, deleteTodo, setIsDone, isDone }) => {
  const handleDone = () => {
    setIsDone(!isDone);
  };
  const handleDelete = () => {
    deleteTodo(id);
  };
  return (
    <li>
      <input type="checkbox" onChange={handleDone} />
      <span style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {content}
      </span>
      <button onClick={handleDelete}>削除</button>
    </li>
  );
};

export default Item;

import React, { useState } from "react";
// import { useForm } from "react-hook-form";

const Form = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value !== "") {
      addTodo(value);
      setValue("");
    } else {
      alert("文字を入力してください");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
    </form>
  );
};

export default Form;

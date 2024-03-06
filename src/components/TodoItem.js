import React, { useState } from "react";
import { FaCheck, FaPen, FaTrash } from "react-icons/fa";

const TodoItem = ({ todo, deleteToggle, todos, setTodos }) => {
  //체크박스 여부
  const [isChecked, setIsChecked] = useState(false);
  const checkedToggle = () => {
    setIsChecked(!isChecked);
  };

  //수정 기능
  const [text, setText] = useState("");
  const edit = (id) => {
    setText(todos.find((todo) => todo.id === id).content);
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, content: text, edit: !todo.edit } : todo
      )
    );
  };

  return (
    <div>
      <li className="list">
        {todo.edit ? (
          <input
            className="edit-list"
            type="text"
            value={text}
            autoFocus
            onChange={(e) => setText(e.target.value)}
          />
        ) : (
          <div className="checkbox-list">
            <input
              className="check-box"
              type="checkbox"
              checked={isChecked}
              onChange={checkedToggle}
            />
            <div className={isChecked ? "checked" : ""}>{todo.content}</div>
          </div>
        )}

        <div className="item-btns">
          <button className="create-btn" onClick={() => edit(todo.id)}>
            {todo.edit ? <FaCheck /> : <FaPen />}
          </button>
          <button>
            <FaTrash
              className="delete-btn"
              onClick={() => deleteToggle(todo.id)}
            ></FaTrash>
          </button>
        </div>
      </li>
    </div>
  );
};

export default TodoItem;

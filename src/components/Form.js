import React, { useRef, useState } from 'react';
import { FaPlus } from "react-icons/fa";

const Form = ({addTodo}) => {
  const [todo, setTodo] = useState("");
  const no = useRef(0);

  const submitForm = (e) => {
    e.preventDefault();
    if(todo === "") {
      return alert("내용을 입력해주세요");
    }
    addTodo({
      id: no.current,
      content: todo,
      checked: false,
    })
    no.current++;
    setTodo("");
    console.log(todo);
  }

  return (
    <div className='form-design'>
      <form onSubmit={submitForm}>
        <input 
          type="text" 
          placeholder='내용을 입력하세요'
          autoFocus
          maxLength={30}
          value={todo}
          onInput={(e) => setTodo(e.target.value)}
        />
        <button type='submit' className='add-btn'>
          <FaPlus className='plus-btn'/>
        </button>
      </form>
    </div>
  );
};

export default Form;
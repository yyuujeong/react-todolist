import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos, deleteToggle, setTodos}) => {
  return (
    <div>
      <ul>
        {todos.sort((a, b) => b.id - a.id).map(todo =>
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteToggle={deleteToggle}
            setTodos={setTodos}
            todos={todos}
          />
        )}
      </ul>
    </div>
  );
};

export default TodoList;
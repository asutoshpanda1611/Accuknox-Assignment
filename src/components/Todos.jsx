import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';
import { FaTimes } from 'react-icons/fa';

const Todos = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <ul className='mt-6 space-y-3'>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className='bg-white flex justify-between items-center p-4 rounded-md shadow-md border border-gray-200'
        >
          <div className='text-gray-800'>{todo.text}</div>
          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className='text-red-600 hover:text-red-800 transition-colors duration-200 ease-in-out'
          >
            <FaTimes />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Todos;

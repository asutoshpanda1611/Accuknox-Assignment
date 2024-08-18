import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <form onSubmit={addTodoHandler} className='flex space-x-3 mt-6'>
      <input
        type="text"
        className='bg-gray-100 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 text-base outline-none text-gray-700 py-2 px-4 leading-6 transition-colors duration-200 ease-in-out w-full'
        placeholder='Enter a new task'
        value={input}
        onChange={(e) => setInput(e.target.value)}                
      />
      <button
        type="submit"
        className='text-white bg-indigo-500 border-0 py-2 px-6 rounded-md text-lg focus:outline-none hover:bg-indigo-600 transition-colors duration-200 ease-in-out'
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;

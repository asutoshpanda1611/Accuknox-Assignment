import React, { useState } from 'react';
import Modal from './Modal';
import AddTodo from '../components/AddTodo';
import Todos from '../components/Todos';

const Addwidget = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  function Confirmhandler(){
    setShowModal(false);
  }


  return (
    <div className="shadow-xl rounded-2xl lg:w-1/3 h-60 flex justify-center items-center">
      <button onClick={openModal} className='border-2 border-gray-300 px-4 py-2 rounded-md'>
        Add Widget +
      </button>
      
      <Modal show={showModal} onClose={closeModal}>
        <div>
          <div className='bg-indigo-700 text-white flex justify-between p-4  '>
            <h1>Add Widget</h1>
          </div>
          <div className='p-4'>
            <h2 className="mb-4">Personalize your dashboard by adding the following widgets:</h2>
            <div className='flex space-x-4 border-b-2 pb-2 mb-4'>
              <button className="hover:underline">CSPM</button>
              <button className="hover:underline">CWPP</button>
              <button className="hover:underline">Image</button>
              <button className="hover:underline">Ticket</button>
            </div>
            <div className='space-y-4'>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <label>Widget 1</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <label>Widget 2</label>
              </div>
            </div>
          </div>
          <AddTodo/>
          <Todos/>
          <div className='absolute bottom-8 right-8 flex space-x-4flex justify-end space-x-4 mt-4 '>
            <button onClick={closeModal} className="btn btn-outline btn-error">Cancel</button>
            <button onClick={Confirmhandler} className="btn btn-outline btn-info">Confirm</button>
            
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Addwidget;
  

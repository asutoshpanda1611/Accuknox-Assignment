import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  function Clickhandler() {
    navigate('/dashboard');
  }

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='text-center'>
        <p className='text-lg mb-4'>This is the home page</p>
        <button onClick={Clickhandler} className="btn btn-outline btn-primary">
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}

export default Home;

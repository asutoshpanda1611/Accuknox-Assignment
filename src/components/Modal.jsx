import React, { useEffect, useState } from 'react';

const Modal = ({ show, onClose, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [show]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end">
      <div className={`bg-white w-1/2 h-full transform transition-transform duration-300 ease-out ${show ? 'translate-x-0' : 'translate-x-full'}`}>
        <button onClick={onClose} className="absolute top-4 right-4 text-lg font-bold">X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

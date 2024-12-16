import React from "react";
import { useNavigate } from "react-router-dom";

const Modal = ({ isOpen, onClose }) => {
    const navigate = useNavigate();

  // Return early if modal is not open
  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-80 shadow-lg relative">
        <h2 className="text-xl font-semibold mb-4 text-center">Choose an Option</h2>
        <div className="flex flex-col gap-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition" onClick={() => navigate('/patient-form') }>
            Patient
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition">
            Doctor
          </button>
        </div>
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times; {/* Close icon */}
        </button>
      </div>
    </div>
  );
};

export default Modal;

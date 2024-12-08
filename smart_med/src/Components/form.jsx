// src/components/Form.js
import React from 'react';

const Form = () => {
  return (
    <div className="flex justify-center min-h-screen items-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 flex w-4/5">
        {/* Sidebar */}
        <div className="w-1/4 p-4 border-r border-gray-300">
          <h2 className="text-xl font-semibold mb-4">Welcome!</h2>
          <p className="text-gray-600 mb-8">Please complete your information</p>
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-blue-500 text-lg">&#x1F464;</span>
              <span className="text-gray-700 font-semibold">Personal Information</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-500">
              <span className="text-gray-400 text-lg">&#x1F4F1;</span>
              <span>Contact Information</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-500">
              <span className="text-gray-400 text-lg">&#x2695;</span>
              <span>Medical History</span>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="w-3/4 p-8 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">First name <span className="text-red-500">*</span></label>
              <input type="text" placeholder="First name" className="p-2 border border-gray-300 rounded w-full" />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Last name <span className="text-red-500">*</span></label>
              <input type="text" placeholder="Last name" className="p-2 border border-gray-300 rounded w-full" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Date of birth <span className="text-red-500">*</span></label>
              <input type="date" className="p-2 border border-gray-300 rounded w-full" />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Blood type <span className="text-red-500">*</span></label>
              <select className="p-2 border border-gray-300 rounded w-full">
                <option>Select blood group</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Height <span className="text-red-500">*</span></label>
              <input type="number" placeholder="Input your height" className="p-2 border border-gray-300 rounded w-full" />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Weight <span className="text-red-500">*</span></label>
              <input type="number" placeholder="Input your weight" className="p-2 border border-gray-300 rounded w-full" />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Nationality <span className="text-red-500">*</span></label>
            <input type="text" placeholder="Input your nationality" className="p-2 border border-gray-300 rounded w-full" />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Photo <span className="text-red-500">*</span></label>
            <div className="border-dashed border-2 border-gray-300 rounded flex items-center justify-center h-24 mt-2 text-gray-500">
              <span className="material-icons text-xl">cloud_upload</span>
              <span className="ml-2">UPLOAD PHOTOS</span>
            </div>
            <p className="text-gray-400 text-xs mt-1">ATTACH FILE. FILE SIZE OF YOUR DOCUMENTS SHOULD NOT EXCEED 10MB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

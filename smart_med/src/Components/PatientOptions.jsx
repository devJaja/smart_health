import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PatientOption = () => {
    const navigate = useNavigate();
  const [patientId, setPatientId] = useState("");
  const [showLogin, setShowLogin] = useState(false); 

  const handleLogin = (e) => {
    e.preventDefault();
    if (patientId.trim() === "") {
      alert("Please enter your Patient ID to log in.");
    } else {
      alert(`Logged in successfully with Patient ID: ${patientId}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Patient Dashboard
        </h1>

        <div className="flex flex-col space-y-4">
          <button
            onClick={() => navigate("/patient-form")}
            className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
          >
            Register as New Patient
          </button>

          <button
            onClick={() =>setShowLogin(!showLogin)} 
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Login with Patient ID
          </button>
        </div>

        {showLogin && (
          <form onSubmit={handleLogin} className="mt-6">
            <div>
              <label
                htmlFor="patientId"
                className="block text-sm font-medium text-gray-700"
              >
                Patient ID
              </label>
              <input
                type="text"
                id="patientId"
                value={patientId}
                onChange={(e) => setPatientId(e.target.value)}
                placeholder="Enter your Patient ID"
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
              onClick={() => navigate('/patient-dashboard')}
            >
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default PatientOption;

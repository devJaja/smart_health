import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DoctorDashboard = () => {
    const navigate = useNavigate();

    const [doctorId, setDoctorId] = useState(""); 

    const handleInputChange = (e) => {
        setDoctorId(e.target.value); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (doctorId.trim() !== "") {
        navigate("/doctor-dashboard")
        } else {
        alert("Please enter your ID.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
            Welcome to the Platform, Doctor!
            </h1>
            <p className="text-gray-600 text-center mb-6">
            Please enter your ID to continue.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label
                htmlFor="doctorId"
                className="block text-sm font-medium text-gray-700"
                >
                Doctor ID
                </label>
                <input
                type="text"
                id="doctorId"
                name="doctorId"
                value={doctorId}
                onChange={handleInputChange}
                placeholder="Enter your ID"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
                Submit
            </button>
            </form>
        </div>
        </div>
    );
};

export default DoctorDashboard;

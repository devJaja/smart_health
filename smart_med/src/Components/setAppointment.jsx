import React, { useState } from "react";

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [formData, setFormData] = useState({
    patientName: "",
    description: "",
    date: "",
    time: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.patientName &&
      formData.description &&
      formData.date &&
      formData.time
    ) {
      setAppointments((prev) => [
        ...prev,
        { id: Date.now(), ...formData },
      ]);
      setFormData({ patientName: "", description: "", date: "", time: "" });
    }
  };

  // Handle deleting an appointment
  const handleRemove = (id) => {
    setAppointments((prev) => prev.filter((apt) => apt.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 mt-20">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* Appointment Form */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-4 text-gray-600">Set an Appointment</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="patientName"
                placeholder="Patient Name"
                value={formData.patientName}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
                required
              ></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Add Appointment
            </button>
          </form>
        </div>

        {/* Appointment List */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-gray-600">Upcoming Appointments</h2>
          {appointments.length > 0 ? (
            <ul className="divide-y divide-gray-200">
              {appointments.map((apt) => (
                <li
                  key={apt.id}
                  className="py-4 flex justify-between items-center"
                >
                  <div>
                    <p className="text-lg font-medium text-gray-700">{apt.patientName}</p>
                    <p className="text-gray-500 text-sm">{apt.description}</p>
                    <p className="text-gray-700 text-sm">
                      {apt.date} at {apt.time}
                    </p>
                  </div>
                  <button
                    onClick={() => handleRemove(apt.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    ❌ Cancel
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No appointments scheduled.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from 'react';

const UpcomingAppointments = () => {
  const appointments = [
    {
      date: 'Today',
      time: '11:00 am',
      doctor: 'Dorcas Dakkas',
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      date: 'Today',
      time: '09:00 am',
      doctor: 'Demi Wilkinson',
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-4 w-full max-w-md">
      <h2 className="text-lg font-bold mb-2">Upcoming Appointments</h2>
      {appointments.map((appointment, index) => (
        <div key={index} className="border-b py-2">
          <p className="font-semibold text-blue-500">{appointment.date} {appointment.time}</p>
          <p>{appointment.doctor}</p>
          <p className="text-gray-500">{appointment.description}</p>
          <div className="flex space-x-2 mt-2">
            <button className="bg-red-500 text-white px-2 py-1 rounded">Cancel</button>
            <button className="bg-yellow-500 text-white px-2 py-1 rounded">Reschedule</button>
            <button className="bg-blue-500 text-white px-2 py-1 rounded">View Details</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingAppointments;

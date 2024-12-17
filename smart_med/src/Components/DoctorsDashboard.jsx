
const DoctorDashboard = () => {
  const appointments = [
    {
      id: 1,
      time: "11:00 am",
      patient: "Dorcas Dakkas",
      description:
        "Lorem ipsum dolor sit amet consectetur. Amet facilisis tempor ut porttitor mattis tempor.",
    },
    {
      id: 2,
      time: "09:00 am",
      patient: "Demi Wilkinson",
      description:
        "Lorem ipsum dolor sit amet consectetur. Amet facilisis tempor ut porttitor mattis tempor.",
    },
  ];

  const patients = [
    "Dianne Russell",
    "Theresa Webb",
    "Bessie Cooper",
    "Savannah Nguyen",
    "Leslie Alexander",
    "Brooklyn Simmons",
    "Kristin Watson",
    "Darlene Robertson",
  ];

  return (
    <div className="p-16 mt-4 bg-gray-50 min-h-screen flex flex-col  gap-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Upcoming Appointment&apos;s</h2>
          {appointments.map((apt) => (
            <div
              key={apt.id}
              className="p-4 mb-4 border rounded-lg bg-gray-50 shadow-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="bg-gray-300 text-gray-800 px-2 py-1 rounded-md text-xs font-medium">
                    Today
                  </span>
                  <span className="font-semibold text-gray-700">{apt.time}</span>
                </div>
              </div>
              <p className="text-gray-800 font-medium">{apt.patient}</p>
              <p className="text-gray-500 text-sm mt-1">{apt.description}</p>
              <div className="flex items-center gap-2 mt-3">
                <button className="text-blue-500 hover:underline text-sm">
                  Cancel
                </button>
                <button className="text-blue-500 hover:underline text-sm">
                  Reschedule
                </button>
                <button className="text-blue-500 hover:underline text-sm">
                  View details
                </button>
              </div>
            </div>
          ))}
          {/* Appointment Request */}
          <h2 className="text-lg font-semibold mt-6">Appointment Request</h2>
          <div className="p-4 mt-2 border rounded-lg bg-gray-50 shadow-sm flex items-center justify-between">
            <p className="text-gray-700 font-medium">Dianne Russell</p>
            <div className="flex gap-2">
              <button className="text-gray-500 hover:text-gray-700">✅</button>
              <button className="text-gray-500 hover:text-gray-700">❌</button>
              <button className="text-gray-500 hover:text-gray-700">📄</button>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="col-span-2 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">My Bio</h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-gray-800">Dianne Russell</p>
              <p className="text-gray-500">Phone Number: +234 9011238451</p>
              <p className="text-gray-500">Email: diannerussel@gmail.com</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600">✏️</button>
          </div>

          {/* Patient List */}
          <h2 className="text-lg font-semibold mt-6">My Patients: {patients.length}</h2>
          <div className="border rounded-lg mt-3">
            {/* Search and Filter */}
            <div className="p-2 flex items-center justify-between border-b bg-gray-100">
              <input
                type="text"
                placeholder="🔍 Search"
                className="w-full p-2 border rounded-md focus:outline-none"
              />
              <button className="ml-2 text-gray-500 hover:text-gray-700">⚙️ Filter</button>
            </div>

            {/* Patients Table */}
            <ul>
              {patients.map((patient, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between p-3 border-b hover:bg-gray-50"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-gray-700 font-medium">{patient}</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="text-gray-400 hover:text-gray-600">💬</button>
                    <button className="text-gray-400 hover:text-gray-600">📄</button>
                    <button className="text-gray-400 hover:text-gray-600">❌</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;

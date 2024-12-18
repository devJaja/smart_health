import React from "react";

const MedicationAndTest = () => {
  const medications = [
    {
      name: "",
      dosage: "",
      frequency: "",
      duration: "",
      prescribedBy: "",
    },
    {
      name: "",
      dosage: "",
      frequency: "",
      duration: "",
      prescribedBy: "",
    },
    
  ];

  const tests = [
    {
      name: "",
      date: "",
      result: "",
      requestedBy: "",
    },
    {
      name: "",
      date: "",
      result: "",
      requestedBy: "",
    },
  ];

  return (
    <div className="p-16 mt-4 bg-gray-50 min-h-screen">
      {/* Medications Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          My Medication and Prescription&apos;s
        </h2>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="text-gray-500 text-sm border-b">
              <th className="py-2 text-left">Medication</th>
              <th className="py-2 text-left">Dosage</th>
              <th className="py-2 text-left">Frequency</th>
              <th className="py-2 text-left">Duration</th>
              <th className="py-2 text-left">Prescribed by</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {medications.map((med, index) => (
              <tr
                key={index}
                className="text-gray-800 text-sm border-b hover:bg-gray-50"
              >
                <td className="py-3 font-semibold">{med.name}</td>
                <td className="py-3">{med.dosage}</td>
                <td className="py-3">{med.frequency}</td>
                <td className="py-3">{med.duration}</td>
                <td className="py-3">{med.prescribedBy}</td>
                <td className="py-3">
                  <button className="text-gray-400 hover:text-gray-600">
                    ✏️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Test Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">My Test</h2>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="text-gray-500 text-sm border-b">
              <th className="py-2 text-left">Test name</th>
              <th className="py-2 text-left">Date</th>
              <th className="py-2 text-left">Result</th>
              <th className="py-2 text-left">Requested by</th>
            </tr>
          </thead>
          <tbody>
            {tests.map((test, index) => (
              <tr
                key={index}
                className="text-gray-800 text-sm border-b hover:bg-gray-50"
              >
                <td className="py-3 font-semibold">{test.name}</td>
                <td className="py-3">{test.date}</td>
                <td className="py-3">{test.result}</td>
                <td className="py-3">{test.requestedBy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MedicationAndTest;

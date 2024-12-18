import { useNavigate } from "react-router-dom";
const MyDoctors = () => {
  const navigate = useNavigate();
  const doctors = [
    { name: 'Dr. Dianne Russell', field: 'Cardiology' },
    { name: 'Dr. Daniel Paul', field: 'Orthopedics' },
    { name: 'Dr. King Joseph', field: 'Neurology' },
    {name: 'Dr. Mike Smith', field: 'Nephrology' },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-4 w-full max-w-sm">
      <h2 className="text-lg font-bold mb-2">Doctors Available</h2>
      <ul className="text-sm">
        {doctors.map((doctor, index) => (
          <li key={index} className="flex justify-between items-center py-2">
            <span>
              <p className="font-semibold">{doctor.name}</p>
              <p className="text-gray-500">{doctor.field}</p>
            </span>
            <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={()=>navigate("/set-appointment")}>Contact</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyDoctors;

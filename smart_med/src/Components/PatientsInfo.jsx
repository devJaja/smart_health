

import { useNavigate } from "react-router-dom";
import { useReadContract } from "wagmi";
import { abi } from "../../abi";
import { useEffect, useState } from "react";

const PatientInfo = () => {
  const navigate = useNavigate();
  const [patientId, setPatientId] = useState(null);

  // Read the patient ID from the contract
  const { data, error, isLoading } = useReadContract({
    abi,
    address: "0x4F556164A12aA71c4f635cbBbeD2690831A4aBAD",
    functionName: "getPatientId",
  });

  // Update state when data is fetched
  useEffect(() => {
    if (data) {
      setPatientId(data.toString()); // Convert BigInt to string
      console.log("Patient ID:", data.toString());
    }
  }, [data]);

  return (
    <div className="bg-white shadow rounded-lg p-4 w-full max-w-md">

          {/* View Tests and Medications */}
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              See My Tests and Medications
            </h2>
            <p className="text-gray-500 mb-6">
              View your test results and current medication prescriptions.
            </p>
            <button
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition duration-300"
              onClick={() => navigate("/my-medication")}
            >
              View Tests & Medications
            </button>
          </div>
  );
};

export default PatientInfo;


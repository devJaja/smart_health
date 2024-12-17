import { useNavigate } from "react-router-dom";
import { useReadContract } from "wagmi";
import { abi } from "../../abi";
import { useEffect } from "react";
const PatientInfo = () => {
    const navigate = useNavigate();
    // const { data: patientid, readContract } = useReadContract();

    // const { data: balance } = useReadContract({
    //     abi: abi,
    //     address: '0x4F556164A12aA71c4f635cbBbeD2690831A4aBAD',
    //     functionName: 'getPatientId',
    //   })

    //   console.log(balance)
    
    //   return (
    //     <div>Balance: {balance?.toString()}</div>
    //   )

    const { data: patientId } = useReadContract({
        abi: abi,
        address: '0x4F556164A12aA71c4f635cbBbeD2690831A4aBAD',
        functionName: 'getPatientId',
      })

    

    useEffect(() => {
        console.log(patientId)
        if (!patientId) {
            //navigate('/login');
        }
    }, [patientId, navigate]);

    //   console.log(patientId);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Patient Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* View My ID */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              View My ID
            </h2>
            <p className="text-gray-500 mb-6">
              Quickly view your unique patient ID for identification purposes.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300" onClick={() => alert(patientId)}>
              View ID ({patientId?.toString()})
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              See My Tests and Medications
            </h2>
            <p className="text-gray-500 mb-6">
              View your test results and current medication prescriptions.
            </p>
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition duration-300"onClick={() => navigate('/my-medication')}>
              View Tests & Medications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientInfo;

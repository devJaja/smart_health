// import { useReadContract } from 'wagmi';
// import { abi } from '../../abi';
// // import { useEffect, useState } from 'react';

// const MyBio = () => {
//     // const [patient, setPatient ] = useState([]);


//     const getData = async () => {
//       const { data: patient } = await useReadContract({
//         functionName: 'getPatientDetails',
//         abi,
//         address: '0xC994B6b6f7e8853d27754f38d530532dcEF3651A',
//         args: [1002]
//       });

//       // setPatient(patient);
    
//       console.log("the patient data is: ", patient.id);
      
//     }
//     getData();

    
//     // useEffect(() => {
//     //   getData()
//     // }, [patient])
    
//     // console.log("the state of patient is: ",patient);

  

//   return (
//     <div className="bg-white shadow rounded-lg p-2 gap-4 w-full max-w-sm">
//       <h2 className="text-lg font-bold mb-2">My Bio</h2>
//       <div className="flex items-center mb-4">
//         <img
//           src="https://via.placeholder.com/40"
//           alt="Profile"
//           className="w-12 h-12 rounded-full mr-4"
//         />
//         <div>
//           <p className="text-sm font-semibold">name</p>
//           <p className="text-gray-500 text-sm">02/12/1982</p>
//         </div>
//       </div>
//       <p className="text-sm"><span className="font-semibold">ID Number:</span> {patient.id}</p>
//       <p className="text-sm"><span className="font-semibold">Emergency Contact:</span> +234 9011238451</p>
//       <p className="text-sm"><span className="font-semibold">Blood group:</span> O+</p>
//     </div>
//   );
// };

// export default MyBio;



import { useReadContract } from 'wagmi';
import { abi } from '../../abi';
import { useEffect, useState } from 'react';

const MyBio = () => {
  const [patient, setPatient] = useState(null);

  // Read contract data
  const { data, isError, isLoading } = useReadContract({
    functionName: 'getPatientDetails',
    abi,
    address: '0xC994B6b6f7e8853d27754f38d530532dcEF3651A',
    args: [1002]
  });

  useEffect(() => {
    if (data) {
      setPatient(data); // Update state when data is fetched
      console.log("The patient data is: ", data);
    }
  }, [data]);

  return (
    <div className="bg-white shadow rounded-lg p-2 gap-4 w-full max-w-sm">
      <h2 className="text-lg font-bold mb-2">My Bio</h2>

      {isLoading ? (
        <p>Loading patient data...</p>
      ) : isError ? (
        <p className="text-red-500">Failed to load data</p>
      ) : patient ? (
        <>
          <div className="flex items-center mb-4">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="text-sm font-semibold">{patient.name?.toString()}</p>
              <p className="text-gray-500 text-sm">{patient.DOB?.toString()}</p>
            </div>
          </div>
          <p className="text-sm">
            <span className="font-semibold">ID Number:</span> {patient.id?.toString()}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Emergency Contact:</span> {patient.emergency_contact?.toString()}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Blood group:</span> O+
          </p>
        </>
      ) : (
        <p>No patient data found.</p>
      )}
    </div>
  );
};

export default MyBio;

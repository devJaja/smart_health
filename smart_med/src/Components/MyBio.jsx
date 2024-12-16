import React from 'react';
import { useReadContract } from 'wagmi';

const MyBio = () => {
  const { data: PatientId } = useReadContract({
    functionName: 'getPatientId',
  })
  return (
    <div className="bg-white shadow rounded-lg p-4 w-full max-w-sm">
      <h2 className="text-lg font-bold mb-2">My Bio</h2>
      <div className="flex items-center mb-4">
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <p className="text-sm font-semibold">Dianne Russell</p>
          <p className="text-gray-500 text-sm">02/12/1982</p>
        </div>
      </div>
      <p className="text-sm"><span className="font-semibold">ID Number:</span> {PatientId?.toString()}</p>
      <p className="text-sm"><span className="font-semibold">Emergency Contact:</span> +234 9011238451</p>
      <p className="text-sm"><span className="font-semibold">Blood group:</span> O+</p>
    </div>
  );
};

export default MyBio;

import { useState } from 'react';
import anatomyImage from '../assets/anatomy.png';
import dortor from '../assets/dorctor.png';
import female_clients from '../assets/client.png';
import male from '../assets/maleClient.png';
import Modal from './Modal';
import MedicationAndTest from './MyMedication';
import MyBio from './MyBio';
import MyDoctors from './MyDoctor';
import DoctorDashboard from './DoctorsDashboard';


const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <div className="flex justify-between items-center w-full min-h-screen bg-gray-50 dark:bg-[#2F2E34] border border-gray-200 dark:border-zinc-800 px-20 py-16">
      
        <div className="flex flex-col items-start w-full max-w-xs">
            <h1 className="text-4xl dark:text-white font-bold mb-4">Where Your Health Thrives with Seamless, Reliable Care</h1>
            <p className="text-gray-600">Empower your healthcare journey with a platform designed for privacy and collaboration.</p>
        </div>
        <div className="relative flex flex-col items-center">
          <div className="relative w-80 h-[400px] bg-white rounded-full shadow-lg overflow-hidden flex items-center justify-center">
            <img src={anatomyImage} alt="Anatomy" className="w-full h-full object-cover" />
          </div>
        </div> 
        <div className="relative flex flex-col items-center h-40">
          <div className="absolute w-0.5 h-full bg-gray-300"></div>
          <div className="absolute w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-center -top-8">
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12c1.5-2 4-2 6-1s4 1 6 0 4-2 6-1"></path>
            </svg>
          </div>
        </div>
        <div>
          <div className="p-4 w-48 bg-white shadow-md rounded-lg text-center">
            <p className="text-gray-500">Expert care, modern techniques, and personalized touch.</p>
            <div className="flex justify-center mt-2">
              <img src={female_clients} alt="Avatar 1" className="w-6 h-6 rounded-full mx-1" />
              <img src={dortor} alt="Avatar 2" className="w-8 h-8 rounded-full" />
              <img src={male} alt="Avatar 3" className="w-6 h-6 rounded-full mx-1" />
            </div>
          </div>
          <button
          className="m-8 px-6 py-2 border border-blue-400 text-blue-600 rounded-full hover:bg-blue-100 transition"
          onClick={openModal}
          >
            Get Started
          </button>

          {/* Modal Component */}
          <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>

      </div> 
      <DoctorDashboard/>
    </>
  )
}

export default Hero

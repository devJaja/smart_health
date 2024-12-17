import MyBio from './MyBio'
import MyDoctors from './MyDoctor'
import UpcomingAppointments from './UpcomingAppointment'
import { useNavigate } from 'react-router-dom'

const PatientDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className=''>
      <div className='mt-16 px-16 py-8 gap-8'>
        <MyBio/>
      </div>
      <div className='flex gap-16 px-16 py-8'>
        <MyDoctors />
        <UpcomingAppointments />
        <button className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300'onClick={() => navigate('/patient-info')}>Vitals</button>
      </div>

    </div>
  )
}

export default PatientDashboard

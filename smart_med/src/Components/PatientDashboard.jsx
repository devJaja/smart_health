import React from 'react'
import MyBio from './MyBio'
import MyDoctors from './MyDoctor'
import MedicationAndTest from './MyMedication'

const PatientDashboard = () => {
  return (
    <div>
        <div className='flex gap-20 px-8 py-4'>
          <MyBio/>
          <MyDoctors /> {/* Component for my doctors */}
        </div>
        <MedicationAndTest /> {/* Component for medication and test details */}
    </div>
  )
}

export default PatientDashboard

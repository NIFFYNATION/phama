import React from 'react'
import Button from './Button'
import { useParams } from 'react-router-dom'
import { medicalExperts } from '../features/services/data/medicalExpertsData'

function DoctorsProfile() {
  const { id } = useParams()
  
  // Find the doctor based on the ID from URL params
  const doctor = medicalExperts.MedsExperts.find(
    doc => doc.id === parseInt(id)
  ) || medicalExperts.MedsExperts[0] // Default to first doctor if ID not found

  return (
    <div className="mb-8">
      <div className="contain-fluid absolute top-[160px] left-0 right-0 bg-[#DCEDFE] h-[200px] sm:h-[250px] md:h-[300px] items-center justify-center">
      </div>
      <div className="contain flex flex-col lg:flex-row relative bg-[#F1F1F1] min-h-screen md:min-h-[80vh] md:h-[70vh] mt-[120px] items-center justify-center px-4 md:px-6 lg:px-8">
        <div className="w-full md:w-[50%] flex justify-center md:justify-start">
          <img 
            className="w-full max-w-[300px] md:max-w-[100%] mt-8 md:mt-0" 
            src={doctor.photo} 
            alt={doctor.docName} 
          />
        </div>
        <div className="w-full md:w-[80%] mt-8 md:mt-0">
          <div className="w-full p-4 sm:p-6 md:p-10">
            <div>
              <div className="mt-2">
                <h2 className="text-[28px] sm:text-[32px] md:text-[35px] mb-2 font-semibold text-[#1C1C1C]">
                  {doctor.docName}
                </h2>
                <h3 className="text-[16px] sm:text-[18px] text-primary01 font-semibold mb-4">
                  {doctor.specialty}
                </h3>
                <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed">
                  {doctor.aboutDoc}
                </p>
              </div>
              
              <div className="flex flex-col lg:flex-row gap-6 mt-8">
                <div className="flex items-center">
                  <img
                    src="/teamSingleIcon1.png"
                    alt="phone icon"
                    className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]"
                  />
                  <div className="ml-3">
                    <p className="text-[12px] sm:text-[13px] font-medium text-gray-600">
                      CALL NOW:
                    </p>
                    <p className="text-[14px] sm:text-[16px] font-semibold text-[#1C1C1C]">
                      {doctor.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <img
                    src="/teamSingleIcon2.png"
                    alt="email icon"
                    className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]"
                  />
                  <div className="ml-3">
                    <p className="text-[12px] sm:text-[13px] font-medium text-gray-600">
                      EMAIL NOW:
                    </p>
                    <p className="text-[14px] sm:text-[16px] font-semibold text-[#1C1C1C]">
                      {doctor.email}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 sm:mt-10 flex justify-center md:justify-start">
                <Button btnClass="bg-primary01 hover:bg-secondary03 border border-primary01 w-full sm:w-auto">
                  Discover Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorsProfile
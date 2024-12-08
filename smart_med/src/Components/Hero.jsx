import anatomyImage from '../assets/anatomy.png';
import dortor from '../assets/dorctor.png';
import female_clients from '../assets/client.png';
import male from '../assets/maleClient.png';

const Hero = () => {
  return (
    <>
        <div className="flex justify-between items-center w-full min-h-screen bg-gray-50 px-20 py-16">
        
            <div className="flex flex-col items-start w-full max-w-xs">
                <h1 className="text-4xl font-bold mb-4">Where Your Health Thrives with Seamless, Reliable Care</h1>
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

            <div className="p-4 w-48 bg-white shadow-md rounded-lg text-center">
                <p className="text-gray-500">Expert care, modern techniques, and personalized touch.</p>
                <div className="flex justify-center mt-2">
                    <img src={female_clients} alt="Avatar 1" className="w-6 h-6 rounded-full mx-1" />
                    <img src={dortor} alt="Avatar 2" className="w-8 h-8 rounded-full" />
                    <img src={male} alt="Avatar 3" className="w-6 h-6 rounded-full mx-1" />
                </div>
            </div>
        
        </div>
        <div className="bg-white shadow-md rounded-lg min-h-screen px-20 py-16 flex">
        {/* Sidebar */}
            <div className="w-1/4 px-4 py-20 mt-16 border-r border-gray-300">
            <h2 className="text-2xl font-raleway mb-4">Welcome!</h2>
            <p className="text-gray-600 text-2xl font-raleway mb-8">Please complete your information</p>
            <div className="space-y-4">
                <div className="flex items-center space-x-2">
                <span className="text-blue-500">&#x1F464;</span>
                <span className="text-gray-700">Personal Information</span>
                </div>
                <div className="flex items-center space-x-2">
                <span className="text-gray-400">&#x1F4F1;</span>
                <span className="text-gray-500">Contact Information</span>
                </div>
                <div className="flex items-center space-x-2">
                <span className="text-gray-400">&#x2695;</span>
                <span className="text-gray-500">Medical History</span>
                </div>
            </div>
            </div>

        {/* Form Fields */}
        <div className="w-3/4 p-4 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold">First name <span className="text-red-500">*</span></label>
              <input type="text" placeholder="First name" className="mt-1 p-2 border border-gray-300 rounded w-full" />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Last name <span className="text-red-500">*</span></label>
              <input type="text" placeholder="Last name" className="mt-1 p-2 border border-gray-300 rounded w-full" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold">Date of birth <span className="text-red-500">*</span></label>
              <input type="date" placeholder="Input your date of birth" className="mt-1 p-2 border border-gray-300 rounded w-full" />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Blood type <span className="text-red-500">*</span></label>
              <select className="mt-1 p-2 border border-gray-300 rounded w-full">
                <option>Select blood group</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold">Height <span className="text-red-500">*</span></label>
              <input type="number" placeholder="Input your height" className="mt-1 p-2 border border-gray-300 rounded w-full" />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Weight <span className="text-red-500">*</span></label>
              <input type="number" placeholder="Input your weight" className="mt-1 p-2 border border-gray-300 rounded w-full" />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Nationality <span className="text-red-500">*</span></label>
            <input type="text" placeholder="Input your nationality" className="mt-1 p-2 border border-gray-300 rounded w-full" />
          </div>

          <div className="p-6 bg-gray-200 border border-gray-300 rounded-lg text-center">
          <label htmlFor="file-upload" className="cursor-pointer">
            <div className="text-4xl text-purple-500 mb-4">
              <i className="fas fa-cloud-upload-alt"></i>
            </div>
            <p>Drag your file(s) or <span className="text-purple-400 underline">browse</span></p>
            <p className="text-sm text-gray-400">Max 10 MB files are allowed</p>
            <p className="text-sm text-gray-400">JPEG, PNG</p>
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            className="hidden"
          />
          
            {/* <div>
              <img src={imagePreview} alt="Selected Preview" style={{ width: '100px', height: '100px' }} />
            </div> */}
          
        </div>
        </div>
      </div>
    </>
  )
}

export default Hero

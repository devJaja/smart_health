import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useWaitForTransactionReceipt, useWriteContract } from 'wagmi';
import { abi } from '../../abi';
import {toast, ToastContainer} from 'react-toastify'
import { useNavigate } from 'react-router-dom';
// import { ethers } from 'ethers';
// import { writeContract } from 'viem/actions';
// import { config } from './config'
const PatientForm = () => {

  const navigate = useNavigate();
  const {  data: hash, error, writeContract  } = useWriteContract();

  const {
    register,
    handleSubmit, 
    reset,
    formState: { errors },
  } = useForm();
  const [filePreview, setFilePreview] = useState(null);

  // const onSubmit = (data) => {
  //   // const { address, value } = data;

  //   // Validate the address and value
  // //   if (!address || !value) {
  // //     alert('Address and value are required!');
  // //     return;
  // //   }
  // //   const parsedValue = ethers.utils.parseEther(value);
  // //   write({ args: [address, parsedValue] });
  // };
  const convertToTimestamp = (date) => Math.floor(new Date(date).getTime() / 1000);
  const onSubmit = async (data) => {

    console.log(data)

    // const value = data
    let sent = writeContract({
      address: '0x4F556164A12aA71c4f635cbBbeD2690831A4aBAD',
      abi,
      functionName: 'addPatientDetails',
      args: [data.name,convertToTimestamp(data.dob), data.gender,123456, data.bloodType, data.nationality]
    })

    if(sent.addPatientDetails == 'addPatientDetails'){
      toast.success("Patient Details Added Successfully!", {
        position: "top-right",
        autoClose: 3000, // Auto close after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      reset();
    }
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash
  })

  // const onSubmit = (e) => {
  //   e.preventDefault();

  //   // const value = data
  //   writeContract({
  //     address: '0x4F556164A12aA71c4f635cbBbeD2690831A4aBAD',
  //     abi,
  //     functionName: 'smartMed',
  //     args: ["KC KC", "user@mail.com", "12/10/1999", "Male", "081234565678"]
  //   })
  // }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFilePreview(URL.createObjectURL(file));
    }
  };
  
  return (
    <div className="bg-white shadow-md rounded-lg min-h-screen mt-4 dark:bg-[#2F2E34] border border-gray-200 dark:border-zinc-800 px-20 py-16 dark:text-white flex">
      <div className="w-1/4 px-4 py-20 mt-16 border-r border-gray-300">
        <h2 className="text-2xl font-raleway mb-4">Welcome!</h2>
        <p className="text-gray-500 dark:text-gray-300 text-2xl font-raleway mb-8">Please complete your information</p>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-blue-400">&#x1F464;</span>
            <span className="text-gray-500 dark:text-gray-300">Personal Information</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-400">&#x1F4F1;</span>
            <span className="text-gray-500 dark:text-gray-300">Contact Information</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-400">&#x2695;</span>
            <span className="text-gray-500 dark:text-gray-300">Medical History</span>
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-3/4 p-4 space-y-6 dark:text-white"
        >
        <div className='dark:text-white'>
          <label className="block text-gray-700 dark:text-white font-semibold">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="name"
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 dark:text-white font-semibold">
            Date of birth <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            placeholder="Input your DOB"
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            {...register("DOB", {
              required: "Age is required",
              min: { value: 1, message: "Age must be greater than 0" },
            })}
          />
          {errors.age && (
            <p className="text-sm text-red-500">{errors.age.message}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 dark:text-white font-semibold">
            Gender <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Input your gender"
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            {...register("gender", { required: "Gender is required" })}
          />
          {errors.gender && (
            <p className="text-sm text-red-500">{errors.gender.message}</p>
          )}
        </div>

        <div className='dark:text-white'>
          <label className="block text-gray-700 dark:text-white font-semibold">
            Emergency Contact <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            placeholder="emergency contact"
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            {...register("Contact", { required: "contact is required" })}
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.contact.message}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 dark:text-white font-semibold">
            Blood Type <span className="text-red-500">*</span>
          </label>
          <select
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            {...register("bloodType", { required: "Blood type is required" })}
          >
            <option value="">Select blood group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
          {errors.bloodType && (
            <p className="text-sm text-red-500">{errors.bloodType.message}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 dark:text-white font-semibold">
            Nationality <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Input your nationality"
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            {...register("nationality", { required: "Nationality is required" })}
          />
          {errors.nationality && (
            <p className="text-sm text-red-500">{errors.nationality.message}</p>
          )}
        </div>

        <div className="p-6 bg-gray-200 border border-gray-300 rounded-lg text-center">
          <label
            htmlFor="file-upload"
            className="cursor-pointer"
          >
            <div className="text-4xl text-purple-500 mb-4">
              <i className="fas fa-cloud-upload-alt"></i>
            </div>
            <p>
              Drag your file(s) or{" "}
              <span className="text-purple-400 underline">browse</span>
            </p>
            <p className="text-sm text-gray-400">Max 10 MB files are allowed</p>
            <p className="text-sm text-gray-400">JPEG, PNG</p>
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            className="hidden"
            {...register("file", { required: "File is required" })}
            onChange={(e) => {
              handleFileChange(e);
            }}
          />
          {errors.file && (
            <p className="text-sm text-red-500">{errors.file.message}</p>
          )}
          {filePreview && (
            <div className="mt-4">
              <img
                src={filePreview}
                alt="Selected Preview"
                style={{ width: "100px", height: "100px" }}
              />
            </div>
          )}
        </div>
        {error && error.message && error.message}

        { hash && alert(<div>Hash: {hash}</div>)}
        { isConfirming && <div>Confirming...</div>}
        {isConfirmed && <div>Transaction Confirmed Successfully</div> && setTimeout(() => {
          navigate('/patient-dashboard');
        }, 5000) }

        <button
          type="submit"
          className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>

      {/* <form onSubmit={handleEventSubmit}>
        <div className='dark:text-white'>
          <label className="block text-gray-700 dark:text-white font-semibold">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="name"
            value={patientName}
            id='patientName'
            onChange={(e) => setPatientName(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className='dark:text-white'>
          <label className="block text-gray-700 dark:text-white font-semibold">
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="enter date of birth"
            value={patientDOB}
            id='patientDOB'
            onChange={(e) => setPatientDOB(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className='dark:text-white'>
          <label className="block text-gray-700 dark:text-white font-semibold">
            Gender <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="gender"
            value={patientGender}
            id='patientGender'
            onChange={(e) => setPatientGender(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className='dark:text-white'>
          <label className="block text-gray-700 dark:text-white font-semibold">
          Emergency Contact <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            placeholder="gender"
            value={patientEmergency}
            id='patientGender'
            onChange={(e) => setPatientEmergency(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-white font-semibold">
            Blood Type <span className="text-red-500">*</span>
          </label>
          <select
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            value={bloodType}
            id='bloodType'
            onChange={(e) => setBloodType(e.target.value)}
            required
          >
            <option value="">Select blood group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>
        <div className='dark:text-white'>
          <label className="block text-gray-700 dark:text-white font-semibold">
            Nationality <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Nationality"
            value={nationality}
            id='nationality'
            onChange={(e) => setNationality(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="p-6 bg-gray-200 border border-gray-300 rounded-lg text-center">
          <label
            htmlFor="file-upload"
            className="cursor-pointer"
          >
            <div className="text-4xl text-purple-500 mb-4">
              <i className="fas fa-cloud-upload-alt"></i>
            </div>
            <p>
              Drag your file(s) or{" "}
              <span className="text-purple-400 underline">browse</span>
            </p>
            <p className="text-sm text-gray-400">Max 10 MB files are allowed</p>
            <p className="text-sm text-gray-400">JPEG, PNG</p>
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              handleFileChange(e);
            
          />
          {filePreview && (
            <div className="mt-4">
              <img
                src={filePreview}
                alt="Selected Preview"
                style={{ width: "100px", height: "100px" }}
              />
            </div>
          )}
        </div>
        <button
        type="submit"
        className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </form> */}
    </div>
  );
};

export default PatientForm;
export const abi = [
          {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "indexed": false,
                "internalType": "string",
                "name": "DOB",
                "type": "string"
              },
              {
                "indexed": false,
                "internalType": "string",
                "name": "gender",
                "type": "string"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "emergency_contact",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "string",
                "name": "blood_type",
                "type": "string"
              },
              {
                "indexed": false,
                "internalType": "string",
                "name": "nationality",
                "type": "string"
              }
            ],
            "name": "PatientRegistered",
            "type": "event"
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "description",
                "type": "string"
              }
            ],
            "name": "addAppointment",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "patientId",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "hivVirus",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "bloodPressure",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "hepatitis",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "hereditaryTrait",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "otherViruses",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "bacteria",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "xray",
                "type": "string"
              }
            ],
            "name": "addMedicalRecords",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "_name",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "_DOB",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "_gender",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "_emergency_contact",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "_blood_type",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "_nationality",
                "type": "string"
              }
            ],
            "name": "addPatientDetails",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "appointmentId",
                "type": "uint256"
              }
            ],
            "name": "bookAppointment",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "patient_ID",
                "type": "uint256"
              }
            ],
            "name": "getPatientDetails",
            "outputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "getPatientId",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "viewAppointmentRequests",
            "outputs": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                  },
                  {
                    "internalType": "string",
                    "name": "description",
                    "type": "string"
                  },
                  {
                    "internalType": "bool",
                    "name": "isBooked",
                    "type": "bool"
                  }
                ],
                "internalType": "struct SmartMed.Appointment[]",
                "name": "",
                "type": "tuple[]"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "viewAvailableAppointments",
            "outputs": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                  },
                  {
                    "internalType": "string",
                    "name": "description",
                    "type": "string"
                  },
                  {
                    "internalType": "bool",
                    "name": "isBooked",
                    "type": "bool"
                  }
                ],
                "internalType": "struct SmartMed.Appointment[]",
                "name": "",
                "type": "tuple[]"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "patientId",
                "type": "uint256"
              }
            ],
            "name": "viewMedicalRecords",
            "outputs": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "patientId",
                    "type": "uint256"
                  },
                  {
                    "internalType": "string",
                    "name": "hivVirus",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "bloodPressure",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "hepatitis",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "hereditaryTrait",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "otherViruses",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "bacteria",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "xray",
                    "type": "string"
                  }
                ],
                "internalType": "struct SmartMed.Record[]",
                "name": "",
                "type": "tuple[]"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          }
        ]
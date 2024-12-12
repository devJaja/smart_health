// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

contract SmartHealth {

    constructor() {
        admin = msg.sender;
    }

    struct Patient {
        string name;
        uint256 id;
        uint256 age;
        string gender;
        string blood_type;
        string nationality;
        string[] medical_records;
    }

    struct Doctor {
        string name;
        uint medical_license_number;
        uint8 board_certificate_number;
        string specialization;
        string worked_hospital;
        string patientAddress; 
        string nationality;
    }

    mapping(address => Patient) private patients;
    mapping(uint256 => address) private idToAddress;
    mapping(address => Doctor) private doctors;

    uint256 private patientID = 1;
    address private admin;

    modifier onlyPersonnel() {
        require(msg.sender == admin, "Only medical personnel can perform this action.");
        _;
    }

    modifier onlyRegisteredPatient() {
        require(patients[msg.sender].id != 0, "Patient not registered.");
        _;
    }


    function addPatientDetails(
        string memory _name, 
        address patientAddress,
        uint256 _age,  
        string memory _gender, 
        string memory _blood_type, 
        string memory _nationality) public {
        
        require(patients[patientAddress].id == 0, "Patient already registered.");

        patients[patientAddress] = Patient({
            name: _name,
            id: patientID,
            age: _age,
            gender: _gender,
            blood_type: _blood_type,
            nationality: _nationality,
            medical_records: new string[](0)
        });

        idToAddress[patientID] = patientAddress;
        patientID++;
    }

    function getPatientId() external view onlyRegisteredPatient returns (uint256) {
        return patients[msg.sender].id;
    }

    function getPatientDetails(uint patientID) public view returns (string memory, uint256, uint256, string memory, string memory, string memory) {
        address patientAddress = idToAddress[patientID];
        require(patientAddress != address(0), "Invalid patient ID.");
        return (
            patients[patientAddress].name,
            patients[patientAddress].id,
            patients[patientAddress].age,
            patients[patientAddress].gender,
            patients[patientAddress].blood_type,
            patients[patientAddress].nationality
        );
    }

    function addMedicalRecords(uint256 patientId, string memory hivVirus, string memory bloodPressure, string memory hepatitis, string memory hereditaryTrait, string memory otherViruses, string memory bacteria) external onlyPersonnel {
        address patientAddress = idToAddress[patientId];
        require(patientAddress != address(0), "Invalid patient ID.");

        patients[patientAddress].medical_records.push(hivVirus, bloodPressure, hepatitis, hereditaryTrait, otherViruses, bacteria);
    }

    function viewMedicalRecords(uint256 patientId) external view onlyPersonnel returns (string[] memory) {
        address patientAddress = idToAddress[patientId];
        require(patientAddress != address(0), "Invalid patient ID.");

        if (msg.sender != patientAddress && msg.sender != admin) {
            revert("Access denied.");
        }

        return patients[patientAddress].results;
    }
}

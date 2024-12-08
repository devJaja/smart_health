// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

contract PatientDetails {

    struct Patient {
        string name;
        uint256 age;
        string gender;
        string blood_type;
        string patientAddress; 
        string nationality;
    }

    mapping(address => Patient) private patients;

    function setPatientDetails(
        string memory _name, 
        uint256 _age, 
        string memory _patientAddress, 
        string memory _gender, 
        string memory _blood_type, 
        string memory _nationality) public {
        patients[msg.sender] = Patient({
            name: _name,
            age: _age,
            gender: _gender,
            blood_type: _blood_type,
            nationality: _nationality,
            patientAddress: _patientAddress
        });
    }

    function getPatientDetails() public view returns (
        uint256 _age, 
        string memory name, 
        string memory patientAddress, 
        string memory gender, 
        string memory blood_type, 
        string memory nationality) {
        Patient memory patient = patients[msg.sender];
        return (patient.age, patient.name, patient.patientAddress, patient.blood_type, patient.gender, patient.nationality);
    }

    function patientExists() public view returns (bool) {
        return bytes(patients[msg.sender].name).length > 0;
    }
}

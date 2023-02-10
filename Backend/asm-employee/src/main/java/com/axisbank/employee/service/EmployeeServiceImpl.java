package com.axisbank.employee.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axisbank.employee.entity.Employee;
import com.axisbank.employee.exception.EmployeeAlreadyExistException;
import com.axisbank.employee.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public List<Employee> getAllEmployees() {
		return (List<Employee>) employeeRepository.findAll();
	}
	
	@Override
	public List<Employee> getEmployeesByProjectId(String projectId) {
		return employeeRepository.getEmployeesByProjectId(projectId);
	}

	@Override
	public List<Employee> getEmployeesByDesignation(String designation) {
		return employeeRepository.getEmployeesByDesignation(designation);
	}
	
	@Override
	public Employee getEmployeeById(String employeeId) {
		return employeeRepository.findById(employeeId).get();
	}

	@Override
	public Employee getEmployeeByEmailId(String emailId) {
		return employeeRepository.getEmployeeByEmailId(emailId);
	}

	@Override
	public void addEmployee(Employee employee) throws EmployeeAlreadyExistException {
		if(employeeRepository.checkIfEmployeeIdAlreadyExist(employee.getEmployeeId()) != 0) {
			throw new EmployeeAlreadyExistException("Employee with ID: " + employee.getEmployeeId() + " is Already Present");
		} else if (employeeRepository.checkIfEmployeeEmailAlreadyExist(employee.getEmailId()) != 0) {
			throw new EmployeeAlreadyExistException("Employee with Email: " + employee.getEmailId() + " is Already Present");
		}
		employeeRepository.save(employee);
	}

	@Override
	public void updateEmployeeFromEmployee(String employeeId, long mobileNumber) {
		employeeRepository.updateEmployeeFromEmployee(employeeId, mobileNumber);
	}
	
	@Override
	public void updateEmployeeFromAdmin(String employeeId, String designation, String supervisor, String currentProject, double salary) {
		employeeRepository.updateEmployeeFromAdmin(employeeId, designation, supervisor, currentProject, salary);
	}
	
	@Override
	public void updatePassword(String employeeId, String password) {
		employeeRepository.updatePassword(employeeId, password);
	}

	@Override
	public void deleteEmployeeById(String employeeId) {
		employeeRepository.deleteById(employeeId);
	}

	@Override
	public long getCountOfRows() {
		return employeeRepository.count();
	}

}
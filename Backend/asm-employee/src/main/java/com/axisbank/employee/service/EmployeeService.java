package com.axisbank.employee.service;

import java.util.List;

import com.axisbank.employee.entity.Employee;
import com.axisbank.employee.exception.EmployeeAlreadyExistException;

public interface EmployeeService {

	List<Employee> getAllEmployees();
	List<Employee> getEmployeesByProjectId(String projectId);
	List<Employee> getEmployeesByDesignation(String designation);
	Employee getEmployeeById(String employeeId);
	Employee getEmployeeByEmailId(String emailId);
	void addEmployee(Employee employee) throws EmployeeAlreadyExistException;
	void updateEmployeeFromEmployee(String employeeId, long mobileNumber);
	void updateEmployeeFromAdmin(String employeeId, String designation, String supervisor, String currentProject, double salary);
	void updatePassword(String employeeId, String password);
	void deleteEmployeeById(String employeeId);
	long getCountOfRows();
	
}

package com.axisbank.employee.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.axisbank.employee.entity.Employee;
import com.axisbank.employee.exception.EmployeeAlreadyExistException;
import com.axisbank.employee.service.EmployeeService;

@RestController
@CrossOrigin(value = "http://localhost:3000")
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;

	public EmployeeController() {

	}

	public EmployeeService getEmployeeService() {
		return employeeService;
	}

	public void setEmployeeService(EmployeeService employeeService) {
		this.employeeService = employeeService;
	}

//	------------------ GET MAPPING -------------------------

	@GetMapping("/employees")
	public List<Employee> getAllEmployees() {
		return employeeService.getAllEmployees();
	}
	
	@GetMapping("/employees-by-project/{projectId}")
	public List<Employee> getEmployeesByProjectId(@PathVariable String projectId) {
		return employeeService.getEmployeesByProjectId(projectId);
	}
	
	@GetMapping("/employees-by-designation/{designation}")
	public List<Employee> getEmployeesByDesignation(@PathVariable String designation) {
		return employeeService.getEmployeesByDesignation(designation);
	}
	
	@GetMapping("/employee/{employeeId}")
	public Employee getEmployeeById(@PathVariable String employeeId) {
		return employeeService.getEmployeeById(employeeId);
	}

	@GetMapping("/employee-by-email/{emailId}")
	public Employee getEmployeeByEmailId(@PathVariable String emailId) {
		return employeeService.getEmployeeByEmailId(emailId);
	}

	@GetMapping("/employee-count")
	public long countOfEmployees() {
		return employeeService.getCountOfRows();
	}

//	------------------ POST MAPPING ------------------------

	@PostMapping("/add-employee")
	public ResponseEntity<String> addEmployee(@RequestBody Employee employee) throws EmployeeAlreadyExistException {
		employeeService.addEmployee(employee);
		return new ResponseEntity<>("Employee Added", HttpStatus.OK);
	}

//	------------------ PUT MAPPING -------------------------
	
	@PutMapping("/update-employee-from-employee/{employeeId}")
	public ResponseEntity<String> updateEmployeeFromEmployee(@PathVariable String employeeId, @RequestParam long mobileNumber) {
		employeeService.updateEmployeeFromEmployee(employeeId, mobileNumber);
		return new ResponseEntity<>("Updated Employee Data", HttpStatus.OK);
	}
	
	@PutMapping("/update-employee-from-admin/{employeeId}")
	public ResponseEntity<String> updateEmployeeFromAdmin(@PathVariable String employeeId, @RequestParam String designation, @RequestParam String supervisor, @RequestParam String currentProject, @RequestParam double salary) {
		employeeService.updateEmployeeFromAdmin(employeeId, designation, supervisor, currentProject, salary);
		return new ResponseEntity<>("Updated Employee Data", HttpStatus.OK);
	}
	
	@PutMapping("/update-password/{employeeId}")
	public ResponseEntity<String> updatePassword(@PathVariable String employeeId, @RequestParam String password) {
		employeeService.updatePassword(employeeId, password);
		return new ResponseEntity<>("Updated Password", HttpStatus.OK);
	}
	
//	------------------ DELETE MAPPING ----------------------

	@DeleteMapping("/delete-employee/{employeeId}")
	public ResponseEntity<String> deleteEmployeeById(@PathVariable String employeeId) {
		employeeService.deleteEmployeeById(employeeId);
		return new ResponseEntity<>("Employee with ID: " + employeeId + " is deleted.", HttpStatus.OK);
	}

}

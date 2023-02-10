package com.axisbank.employeeauthentication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.axisbank.employeeauthentication.microservice.Employee;

@RestController
@CrossOrigin(value = "http://localhost:3000")
public class AsmEmployeeController {

	@Autowired
	private RestTemplate restTemplate;

//	------------------ GET MAPPING -------------------------

	@SuppressWarnings("unchecked")
	@GetMapping("/employees")
	public List<Employee> getAllEmployees() {
		String url = "http://asm-employee-service/employees";
		return restTemplate.getForObject(url, List.class);
	}
	
	@SuppressWarnings("unchecked")
	@GetMapping("/employees-by-project/{projectId}")
	public List<Employee> getEmployeesByProjectId(@PathVariable String projectId) {
		String url = "http://asm-employee-service/employees-by-project/" + projectId;
		return restTemplate.getForObject(url, List.class);
	}
	
	@SuppressWarnings("unchecked")
	@GetMapping("/employees-by-designation/{designation}")
	public List<Employee> getEmployeesByDesignation(@PathVariable String designation) {
		String url = "http://asm-employee-service/employees-by-designation/" + designation;
		return restTemplate.getForObject(url, List.class);
	}

	@GetMapping("/employee/{employeeId}")
	public Employee getEmployeeById(@PathVariable String employeeId) {
		String url = "http://asm-employee-service/employee/" + employeeId;
		return restTemplate.getForObject(url, Employee.class);
	}

	@GetMapping("/employee-by-email/{emailId}")
	public Employee getEmployeeByEmailId(@PathVariable String emailId) {
		String url = "http://asm-employee-service/employee-by-email/" + emailId;
		return restTemplate.getForObject(url, Employee.class);
	}
	
}

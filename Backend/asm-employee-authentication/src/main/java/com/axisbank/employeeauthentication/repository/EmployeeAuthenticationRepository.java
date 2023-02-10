package com.axisbank.employeeauthentication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.axisbank.employeeauthentication.microservice.Employee;

@Repository
public interface EmployeeAuthenticationRepository extends JpaRepository<Employee, String> {
	public Employee getEmployeeDetailsByEmailId(String emailId);
}

package com.axisbank.employee.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.axisbank.employee.entity.Employee;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, String> {

	@Transactional
	@Query("select count(e) from Employee e where e.employeeId=:employeeId")
	long checkIfEmployeeIdAlreadyExist(@Param("employeeId") String employeeId);
	
	@Transactional
	@Query("select count(e) from Employee e where e.emailId=:emailId")
	long checkIfEmployeeEmailAlreadyExist(@Param("emailId") String emailId);

	@Transactional
	@Query("select e from Employee e where e.emailId=:emailId")
	Employee getEmployeeByEmailId(@Param("emailId") String emailId);
	
	@Transactional
	@Query("select e from Employee e where e.currentProject=:projectId")
	List<Employee> getEmployeesByProjectId(@Param("projectId") String projectId);
	
	@Transactional
	@Query("select e from Employee e where e.designation=:designation")
	List<Employee> getEmployeesByDesignation(@Param("designation") String designation);
	
	@Transactional
	@Modifying
	@Query("update Employee e set e.mobileNumber=:mobileNumber where e.employeeId=:employeeId")
	void updateEmployeeFromEmployee(@Param("employeeId") String employeeId, @Param("mobileNumber") long mobileNumber);
	
	@Transactional
	@Modifying
	@Query("update Employee e set e.password=:password where e.employeeId=:employeeId")
	void updatePassword(@Param("employeeId") String employeeId, @Param("password") String password);
	
	@Transactional
	@Modifying
	@Query("update Employee e set e.designation=:designation, e.supervisor=:supervisor, e.currentProject=:currentProject, e.salary=:salary where e.employeeId=:employeeId")
	void updateEmployeeFromAdmin(@Param("employeeId") String employeeId, @Param("designation") String designation, @Param("supervisor") String supervisor, @Param("currentProject") String currentProject, @Param("salary") double salary);
	
}
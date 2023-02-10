package com.axisbank.employeeauthentication.microservice;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Employee {

	@Id
	private String employeeId;
	private String employeeName;
	private String emailId;
	private long mobileNumber;
	private String designation;
	private String supervisor;
	private String currentProject;
	private String joiningDate;
	private double salary;
	private String password;

	public Employee() {

	}

	public Employee(String employeeId, String employeeName, String emailId, long mobileNumber, String designation,
			String supervisor, String currentProject, String joiningDate, double salary, String password) {
		this.employeeId = employeeId;
		this.employeeName = employeeName;
		this.emailId = emailId;
		this.mobileNumber = mobileNumber;
		this.designation = designation;
		this.supervisor = supervisor;
		this.currentProject = currentProject;
		this.joiningDate = joiningDate;
		this.salary = salary;
		this.password = password;
	}

	public String getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}

	public String getEmployeeName() {
		return employeeName;
	}

	public void setEmployeeName(String employeeName) {
		this.employeeName = employeeName;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public long getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(long mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public String getSupervisor() {
		return supervisor;
	}

	public void setSupervisor(String supervisor) {
		this.supervisor = supervisor;
	}

	public String getCurrentProject() {
		return currentProject;
	}

	public void setCurrentProject(String currentProject) {
		this.currentProject = currentProject;
	}

	public String getJoiningDate() {
		return joiningDate;
	}

	public void setJoiningDate(String joiningDate) {
		this.joiningDate = joiningDate;
	}

	public double getSalary() {
		return salary;
	}

	public void setSalary(double salary) {
		this.salary = salary;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Employee [employeeId=" + employeeId + ", employeeName=" + employeeName + ", emailId=" + emailId
				+ ", mobileNumber=" + mobileNumber + ", designation=" + designation + ", supervisor=" + supervisor
				+ ", currentProject=" + currentProject + ", joiningDate=" + joiningDate + ", salary=" + salary
				+ ", password=" + password + "]";
	}

}

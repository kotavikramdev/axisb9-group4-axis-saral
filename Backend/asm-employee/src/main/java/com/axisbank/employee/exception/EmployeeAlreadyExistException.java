package com.axisbank.employee.exception;

public class EmployeeAlreadyExistException extends Exception {

	private static final long serialVersionUID = -7760046L;

	public EmployeeAlreadyExistException() {
		super();
	}

	public EmployeeAlreadyExistException(String message) {
		super(message);
	}

}
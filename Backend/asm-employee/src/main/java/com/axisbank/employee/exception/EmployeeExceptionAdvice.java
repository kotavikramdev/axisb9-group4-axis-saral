package com.axisbank.employee.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class EmployeeExceptionAdvice {

	@ExceptionHandler(value = EmployeeAlreadyExistException.class)
	public ResponseEntity<String> handlerEmployeeAlreadyExistException(EmployeeAlreadyExistException e) {
		return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
	}

}
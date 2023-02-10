package com.axisbank.profileimage.exception;

public class ProfileImageNotFoundException extends RuntimeException {

	private static final long serialVersionUID = -776150L;

	public ProfileImageNotFoundException() {
		super();
	}

	public ProfileImageNotFoundException(String message, Throwable cause) {
		super(message, cause);
	}

	public ProfileImageNotFoundException(String message) {
		super(message);
	}
	
}

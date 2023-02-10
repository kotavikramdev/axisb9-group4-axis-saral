package com.axisbank.employeedocument.entity;

import java.util.Arrays;

public class EmailDetails {

	private String[] emailId;
	private String messageSubject;
	private String messageBody;
	
	public EmailDetails() {
		
	}

	public EmailDetails(String[] emailId, String messageSubject, String messageBody) {
		this.emailId = emailId;
		this.messageSubject = messageSubject;
		this.messageBody = messageBody;
	}

	public String[] getEmailId() {
		return emailId;
	}

	public void setEmailId(String[] emailId) {
		this.emailId = emailId;
	}

	public String getMessageSubject() {
		return messageSubject;
	}

	public void setMessageSubject(String messageSubject) {
		this.messageSubject = messageSubject;
	}

	public String getMessageBody() {
		return messageBody;
	}

	public void setMessageBody(String messageBody) {
		this.messageBody = messageBody;
	}

	@Override
	public String toString() {
		return "EmailDetails [emailId=" + Arrays.toString(emailId) + ", messageSubject=" + messageSubject
				+ ", messageBody=" + messageBody + "]";
	}
	
}

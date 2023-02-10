package com.axisbank.employeedocument.service;

import java.util.List;

import javax.mail.MessagingException;

import com.axisbank.employeedocument.entity.EmailDetails;
import com.axisbank.employeedocument.entity.EmployeeDocument;

public interface EmployeeDocumentService {

	EmployeeDocument getEmployeeDocument(String employeeId,String emailId,String documentName) throws MessagingException;
	List<EmployeeDocument> getEmployeeDocuments(String employeeId);
	List<EmployeeDocument> getSalarySlip(String employeeId);
	List<EmployeeDocument> getOtherDocument(String employeeId);
	void addEmployeeDocument(EmployeeDocument employeeDocument);
	void deleteEmployeeDocumentById(String employeeDocumentId);
//	void sendEmployeeDocument(String emailId,byte[] file) throws MessagingException;
	void sendNotification(EmailDetails emailDetails);
	
}

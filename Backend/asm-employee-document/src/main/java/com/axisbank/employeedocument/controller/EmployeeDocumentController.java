package com.axisbank.employeedocument.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.axisbank.employeedocument.entity.EmailDetails;
import com.axisbank.employeedocument.entity.EmployeeDocument;
import com.axisbank.employeedocument.service.EmployeeDocumentService;

@RestController
@CrossOrigin(value = "http://localhost:3000")
public class EmployeeDocumentController {

	@Autowired
	private EmployeeDocumentService employeeDocumentService;

	@GetMapping("/employee-document-mail/{employeeId}")
	public ResponseEntity<String> getEmployeeDocument(@PathVariable String employeeId,
			@RequestParam("emailMe") String emailId, @RequestParam("documentName") String documentName) {
		try {
			employeeDocumentService.getEmployeeDocument(employeeId, emailId, documentName);
			return new ResponseEntity<>(documentName + " is sent to your registered mail", HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e);
			return new ResponseEntity<>("Error getting your data please try after some time", HttpStatus.OK);
		}
	}

	@GetMapping("/employee-documents/{employeeId}")
	public List<EmployeeDocument> getEmployeeDocuments(@PathVariable String employeeId) {
		return employeeDocumentService.getEmployeeDocuments(employeeId);

	}

	@GetMapping("/employee-salary-slip/{employeeId}")
	public List<EmployeeDocument> getSalarySlip(@PathVariable String employeeId) {
		return employeeDocumentService.getSalarySlip(employeeId);
	}

	@GetMapping("/employee-other-documents/{employeeId}")
	public List<EmployeeDocument> getOtherDocuments(@PathVariable String employeeId) {
		return employeeDocumentService.getOtherDocument(employeeId);
	}

	@PostMapping("/employee-document/add")
	public ResponseEntity<String> addEmployeeDocument(@RequestParam("employeeDocumentId") String employeeDocumentId,
			@RequestParam("documentName") String documentName, @RequestParam("document") MultipartFile document,
			@RequestParam("employeeId") String employeeId) throws IOException {
		EmployeeDocument employeeDocument = new EmployeeDocument(employeeDocumentId, documentName, document.getBytes(),
				employeeId);
		employeeDocumentService.addEmployeeDocument(employeeDocument);
		return new ResponseEntity<>("Document Uploaded Successfully", HttpStatus.OK);
	}

	@PostMapping("/send-notification")
	public ResponseEntity<String> sendMail(@RequestBody EmailDetails emailDetails) {
		employeeDocumentService.sendNotification(emailDetails);
		return new ResponseEntity<String>("Notification sent successfully...", HttpStatus.OK);
	}

	@DeleteMapping("/delete-employee-document/{employeeDocumentId}")
	public ResponseEntity<String> deleteEmployeeDocumentById(@PathVariable String employeeDocumentId) {
		employeeDocumentService.deleteEmployeeDocumentById(employeeDocumentId);
		return new ResponseEntity<String>("Document Deleted...", HttpStatus.OK);
	}

}

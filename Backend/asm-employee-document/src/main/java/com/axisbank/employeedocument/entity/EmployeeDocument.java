package com.axisbank.employeedocument.entity;

import java.util.Arrays;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class EmployeeDocument {

	@Id
	private String employeeDocumentId;

	private String documentName;

	@Lob
	private byte[] document;

	private String employeeId;

	public EmployeeDocument() {

	}

	public EmployeeDocument(String employeeDocumentId, String documentName, byte[] document, String employeeId) {
		this.employeeDocumentId = employeeDocumentId;
		this.documentName = documentName;
		this.document = document;
		this.employeeId = employeeId;
	}

	public String getEmployeeDocumentId() {
		return employeeDocumentId;
	}

	public void setEmployeeDocumentId(String employeeDocumentId) {
		this.employeeDocumentId = employeeDocumentId;
	}

	public String getDocumentName() {
		return documentName;
	}

	public void setDocumentName(String documentName) {
		this.documentName = documentName;
	}

	public byte[] getDocument() {
		return document;
	}

	public void setDocument(byte[] document) {
		this.document = document;
	}

	public String getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}

	@Override
	public String toString() {
		return "EmployeeDocument [employeeDocumentId=" + employeeDocumentId + ", documentName=" + documentName
				+ ", document=" + Arrays.toString(document) + ", employeeId=" + employeeId + "]";
	}

}

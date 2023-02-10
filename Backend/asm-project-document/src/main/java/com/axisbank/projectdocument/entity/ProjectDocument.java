package com.axisbank.projectdocument.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class ProjectDocument {

	@Id
	private String projectDocumentId;

	private String documentName;

	@Lob
	private byte[] document;

	private String projectId;

	public ProjectDocument() {

	}

	public ProjectDocument(String projectDocumentId, String documentName, byte[] document, String projectId) {
		this.projectDocumentId = projectDocumentId;
		this.documentName = documentName;
		this.document = document;
		this.projectId = projectId;
	}

	public String getProjectDocumentId() {
		return projectDocumentId;
	}

	public void setProjectDocumentId(String projectDocumentId) {
		this.projectDocumentId = projectDocumentId;
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

	public String getProjectId() {
		return projectId;
	}

	public void setProjectId(String projectId) {
		this.projectId = projectId;
	}

}

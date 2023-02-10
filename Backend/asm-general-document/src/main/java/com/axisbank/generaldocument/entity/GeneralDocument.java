package com.axisbank.generaldocument.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class GeneralDocument {

	@Id
	private String generalDocumentId;

	private String documentName;

	@Lob
	private byte[] document;

	private String documentType;

	public GeneralDocument() {

	}

	public GeneralDocument(String generalDocumentId, String documentName, byte[] document, String documentType) {
		this.generalDocumentId = generalDocumentId;
		this.documentName = documentName;
		this.document = document;
		this.documentType = documentType;
	}

	public String getGeneralDocumentId() {
		return generalDocumentId;
	}

	public void setGeneralDocumentId(String generalDocumentId) {
		this.generalDocumentId = generalDocumentId;
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

	public String getDocumentType() {
		return documentType;
	}

	public void setDocumentType(String documentType) {
		this.documentType = documentType;
	}

}

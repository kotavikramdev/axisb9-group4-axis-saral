package com.axisbank.generaldocument.service;

import java.util.List;

import com.axisbank.generaldocument.entity.GeneralDocument;

public interface GeneralDocumentService {

	GeneralDocument getGeneralDocumentById(String generalDocumentId);
	List<GeneralDocument> getGeneralDocumentsByDocumentType(String documentType);
	void addGeneralDocument(GeneralDocument generalDocument);
	void deleteGeneralDocumentById(String generalDocumentId);
	
}

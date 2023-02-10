package com.axisbank.generaldocument.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axisbank.generaldocument.entity.GeneralDocument;
import com.axisbank.generaldocument.repository.GeneralDocumentRepository;

@Service
public class GeneralDocumentServiceImpl implements GeneralDocumentService {

	@Autowired
	private GeneralDocumentRepository generalDocumentRepository;

	@Override
	public GeneralDocument getGeneralDocumentById(String generalDocumentId) {
		return generalDocumentRepository.findById(generalDocumentId).get();
	}
	
	@Override
	public List<GeneralDocument> getGeneralDocumentsByDocumentType(String documentType) {
		return generalDocumentRepository.getGeneralDocumentsByDocumentType(documentType);
	}

	@Override
	public void addGeneralDocument(GeneralDocument generalDocument) {
		generalDocumentRepository.save(generalDocument);
	}

	@Override
	public void deleteGeneralDocumentById(String generalDocumentId) {
		generalDocumentRepository.deleteById(generalDocumentId);
	}

}

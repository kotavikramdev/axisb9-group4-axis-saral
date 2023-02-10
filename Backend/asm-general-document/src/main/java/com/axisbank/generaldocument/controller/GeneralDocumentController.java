package com.axisbank.generaldocument.controller;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.axisbank.generaldocument.entity.GeneralDocument;
import com.axisbank.generaldocument.service.GeneralDocumentService;

@RestController
@CrossOrigin(value = "http://localhost:3000")
public class GeneralDocumentController {

	@Autowired
	private GeneralDocumentService generalDocumentService;

	@GetMapping("/general-document/{generalDocumentId}")
	public GeneralDocument getGeneralDocumentById(@PathVariable String generalDocumentId) {
		return generalDocumentService.getGeneralDocumentById(generalDocumentId);
	}
	
	@GetMapping("/general-documents-by-type/{documentType}")
	public List<GeneralDocument> getGeneralDocumentsByDocumentType(@PathVariable String documentType) {
		return generalDocumentService.getGeneralDocumentsByDocumentType(documentType);
	}

	@PostMapping("/general-document/add")
	public ResponseEntity<String> addGeneralDocument(@RequestParam("generalDocumentId") String generalDocumentId,
			@RequestParam("documentName") String documentName, @RequestParam("document") MultipartFile document,
			@RequestParam("documentType") String documentType) throws IOException {
		GeneralDocument generalDocument = new GeneralDocument(generalDocumentId, documentName, document.getBytes(),
				documentType);
		generalDocumentService.addGeneralDocument(generalDocument);
		return new ResponseEntity<>("Document Uploaded Successfully", HttpStatus.OK);
	}

	@DeleteMapping("/delete-general-document/{generalDocumentId}")
	public ResponseEntity<String> deleteGeneralDocumentById(@PathVariable String generalDocumentId) {
		generalDocumentService.deleteGeneralDocumentById(generalDocumentId);
		return new ResponseEntity<String>("Document Deleted...", HttpStatus.OK);
	}

}

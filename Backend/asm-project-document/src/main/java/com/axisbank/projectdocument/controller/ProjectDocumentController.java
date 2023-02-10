package com.axisbank.projectdocument.controller;

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

import com.axisbank.projectdocument.entity.ProjectDocument;
import com.axisbank.projectdocument.service.ProjectDocumentService;

@RestController
@CrossOrigin(value = "http://localhost:3000")
public class ProjectDocumentController {

	@Autowired
	private ProjectDocumentService projectDocumentService;

//	@GetMapping("/project-document/{projectDocumentId}")
//	public ProjectDocument getProjectDocumentById(@PathVariable String projectDocumentId) {
//		return projectDocumentService.getProjectDocumentById(projectDocumentId);
//	}

	@GetMapping("/project-flowchart/{projectDocumentId}")
	public ProjectDocument getFlowchartByProjectId(@PathVariable String projectDocumentId) {
		return projectDocumentService.getFlowchartByProjectId(projectDocumentId);
	}

	@GetMapping("/project-document/{projectId}")
	public List<ProjectDocument> getProjectDocuments(@PathVariable String projectId) {
		return projectDocumentService.getProjectDocuments(projectId);
	}

	@PostMapping("/project-document/add")
	public ResponseEntity<String> addProjectDocument(@RequestParam("projectDocumentId") String projectDocumentId,
			@RequestParam("documentName") String documentName, @RequestParam("document") MultipartFile document,
			@RequestParam("projectId") String projectId) throws IOException {
		ProjectDocument projectDocument = new ProjectDocument(projectDocumentId, documentName, document.getBytes(),
				projectId);
		projectDocumentService.addProjectDocument(projectDocument);
		return new ResponseEntity<>("Document Uploaded Successfully", HttpStatus.OK);
	}

	@DeleteMapping("/delete-project-document/{projectDocumentId}")
	public ResponseEntity<String> deleteProjectDocumentById(@PathVariable String projectDocumentId) {
		projectDocumentService.deleteProjectDocumentById(projectDocumentId);
		return new ResponseEntity<String>("Document Deleted...", HttpStatus.OK);
	}

}

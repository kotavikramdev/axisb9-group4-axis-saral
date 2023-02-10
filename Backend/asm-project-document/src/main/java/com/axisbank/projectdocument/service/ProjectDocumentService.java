package com.axisbank.projectdocument.service;

import java.util.List;

import com.axisbank.projectdocument.entity.ProjectDocument;

public interface ProjectDocumentService {

	ProjectDocument getProjectDocumentById(String projectDocumentId);
	ProjectDocument getFlowchartByProjectId(String projectId);
	List<ProjectDocument> getProjectDocuments(String projectId);
	void addProjectDocument(ProjectDocument projectDocument);
	void deleteProjectDocumentById(String projectDocumentId);
	
}

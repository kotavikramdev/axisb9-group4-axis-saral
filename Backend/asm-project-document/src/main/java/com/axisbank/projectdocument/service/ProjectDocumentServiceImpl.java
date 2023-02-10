package com.axisbank.projectdocument.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axisbank.projectdocument.entity.ProjectDocument;
import com.axisbank.projectdocument.repository.ProjectDocumentRepository;

@Service
public class ProjectDocumentServiceImpl implements ProjectDocumentService {

	@Autowired
	private ProjectDocumentRepository projectDocumentRepository;

	@Override
	public ProjectDocument getProjectDocumentById(String projectDocumentId) {
		return projectDocumentRepository.findById(projectDocumentId).get();
	}
	
	@Override
	public ProjectDocument getFlowchartByProjectId(String projectId) {
		return projectDocumentRepository.getFlowchart(projectId);
	}
	
	@Override
	public List<ProjectDocument> getProjectDocuments(String projectId) {
		return projectDocumentRepository.getProjectDocuments(projectId);
	}

	@Override
	public void addProjectDocument(ProjectDocument projectDocument) {
		projectDocumentRepository.save(projectDocument);
	}

	@Override
	public void deleteProjectDocumentById(String projectDocumentId) {
		projectDocumentRepository.deleteById(projectDocumentId);
	}

}

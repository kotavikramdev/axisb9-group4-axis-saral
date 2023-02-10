package com.axisbank.project.service;

import java.util.List;

import com.axisbank.project.entity.Project;

public interface ProjectService {

	List<Project> getAllProjects();
	List<Project> getOtherProjects(String projectId);
	Project getProjectById(String projectId);
	void addProject(Project project);
	void updateProject(String projectId, Project updatedProject);
	void deleteProjectById(String projectId);
	long getCountOfRows();
	
}

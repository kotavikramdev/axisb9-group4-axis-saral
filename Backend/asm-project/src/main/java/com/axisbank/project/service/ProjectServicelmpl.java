package com.axisbank.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axisbank.project.entity.Project;
import com.axisbank.project.repository.ProjectRepository;

@Service
public class ProjectServicelmpl implements ProjectService {

	@Autowired
	private ProjectRepository projectRepository;

	@Override
	public List<Project> getAllProjects() {
		return (List<Project>) projectRepository.findAll();
	}
	
	@Override
	public List<Project> getOtherProjects(String projectId) {
		return projectRepository.getOtherProjects(projectId);
	}
	
	@Override
	public Project getProjectById(String projectId) {
		return projectRepository.findById(projectId).get();
	}

	@Override
	public void addProject(Project project) {
		projectRepository.save(project);
	}

	@Override
	public void updateProject(String projectId, Project updatedProject) {

	}

	@Override
	public void deleteProjectById(String projectId) {
		projectRepository.deleteById(projectId);
	}

	@Override
	public long getCountOfRows() {
		return projectRepository.count();
	}

}

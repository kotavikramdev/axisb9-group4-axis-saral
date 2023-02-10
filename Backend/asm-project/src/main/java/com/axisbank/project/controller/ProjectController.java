package com.axisbank.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.axisbank.project.entity.Project;
import com.axisbank.project.service.ProjectService;


@RestController
public class ProjectController {

	@Autowired
	private ProjectService projectService;
	
	public ProjectController() {
		
	}

	public ProjectService getProjectService() {
		return projectService;
	}

	public void setProjectService(ProjectService projectService) {
		this.projectService = projectService;
	}

//	------------------ GET MAPPING -------------------------
	
	@GetMapping("/projects")
	public List<Project> getAllProjects() {
		return projectService.getAllProjects();
	}
	
	@GetMapping("/other-projects/{projectId}")
	public List<Project> getOtherProjects(@PathVariable String projectId){
		return projectService.getOtherProjects(projectId);
	}
	
	@GetMapping("/project/{projectId}")
	public Project getProjectById(@PathVariable String projectId) {
		return projectService.getProjectById(projectId);
	}
	
	@GetMapping("/project-count")
	public long countOfProjects() {
		return projectService.getCountOfRows();
	}
	
//	------------------ POST MAPPING ------------------------
	
	@PostMapping("/add-project")
	public ResponseEntity<String> addProject(@RequestBody Project project) {
		projectService.addProject(project);
		return new ResponseEntity<>("Project Added", HttpStatus.OK);
	}
	
//	------------------ PUT MAPPING -------------------------
	
//	@PutMapping("/Projects/{projectId}")
//	public ResponseEntity<String> updateProject(@PathVariable String projectId,@RequestBody Project newProject){
//		if (!projectId.equals(newProject.getProjectId())) {
//			return new ResponseEntity<String>("project updated suscefully", HttpStatus.BAD_REQUEST);
//		}
//		else {
//			projectService.updateProject(projectId,  newProject);
//			return new ResponseEntity<String>("project updated successfully", HttpStatus.CREATED);
//		}
//	}
	
//	------------------ DELETE MAPPING ----------------------
	
	@DeleteMapping("/delete-project/{projectId}")
	public ResponseEntity<String>deleteProjectById(@PathVariable String projectId){
		projectService.deleteProjectById(projectId);
		return new ResponseEntity<>("Project with ID: " + projectId + " is deleted.", HttpStatus.OK);
	}
	
}

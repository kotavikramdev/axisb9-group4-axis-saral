package com.axisbank.employeeauthentication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.axisbank.employeeauthentication.microservice.Project;

@RestController
@CrossOrigin(value = "http://localhost:3000")
public class AsmProjectController {

	@Autowired
	private RestTemplate restTemplate;

//	------------------ GET MAPPING -------------------------

	@SuppressWarnings("unchecked")
	@GetMapping("/projects")
	public List<Project> getAllProjects() {
		String url = "http://asm-project-service/projects";
		return restTemplate.getForObject(url, List.class);
	}

	@SuppressWarnings("unchecked")
	@GetMapping("/other-projects/{projectId}")
	public List<Project> getOtherProjects(@PathVariable String projectId) {
		String url = "http://asm-project-service/other-projects/" + projectId;
		return restTemplate.getForObject(url, List.class);
	}

	@GetMapping("/project/{projectId}")
	public Project getProjectById(@PathVariable String projectId) {
		String url = "http://asm-project-service/project/" + projectId;
		return restTemplate.getForObject(url, Project.class);
	}

}

package com.axisbank.adminauthentication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.axisbank.adminauthentication.microservice.Project;

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

	@GetMapping("/project/{projectId}")
	public Project getProjectById(@PathVariable String projectId) {
		String url = "http://asm-project-service/project/" + projectId;
		return restTemplate.getForObject(url, Project.class);
	}

//    ------------------ POST MAPPING ------------------------

	@SuppressWarnings("unchecked")
	@PostMapping("/add-project")
	public ResponseEntity<String> addProject(@RequestBody Project project) {
		String url = "http://asm-project-service/add-project";
		try {
			return restTemplate.postForObject(url, project, ResponseEntity.class);
		} catch (Exception e) {
			System.out.println(e);
		}
		return new ResponseEntity<>("Project Added", HttpStatus.OK);
	}

//    ------------------ DELETE MAPPING ----------------------

	@DeleteMapping("/delete-project/{projectId}")
	public ResponseEntity<String> deleteProjectById(@PathVariable String projectId) {
		String url = "http://asm-project-service/delete-project/" + projectId;
		restTemplate.delete(url);
		return new ResponseEntity<>("Project deleted.", HttpStatus.OK);
	}

}

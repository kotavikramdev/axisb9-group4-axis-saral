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

import com.axisbank.adminauthentication.microservice.Stakeholder;

@RestController
@CrossOrigin(value = "http://localhost:3000")
public class AsmStakeholderController {

	@Autowired
	private RestTemplate restTemplate;

//	------------------ GET MAPPING -------------------------

	@SuppressWarnings("unchecked")
	@GetMapping("/stakeholders")
	public List<Stakeholder> getAllStakeholders() {
		String url = "http://asm-stakeholder-service/stakeholders";
		return restTemplate.getForObject(url, List.class);
	}

	@SuppressWarnings("unchecked")
	@GetMapping("/stakeholder-project/{projectId}")
	public List<Stakeholder> getStakeholdersByProjectId(@PathVariable String projectId) {
		String url = "http://asm-stakeholder-service/stakeholder-project/" + projectId;
		return restTemplate.getForObject(url, List.class);
	}

//    ------------------ POST MAPPING ------------------------
	
	@SuppressWarnings("unchecked")
	@PostMapping("/add-stakeholder")
	public ResponseEntity<String> addStakeholder(@RequestBody Stakeholder stakeholder) {
		String url = "http://asm-stakeholder-service/add-stakeholder";
		try {
			return restTemplate.postForObject(url, stakeholder, ResponseEntity.class);
		} catch (Exception e) {
			System.out.println(e);
		}
		return new ResponseEntity<>("stakeholder added...", HttpStatus.CREATED);
	}

//    ------------------ DELETE MAPPING -------------------------
	
	@DeleteMapping("/delete-stakeholder/{stakeholderId}")
	public ResponseEntity<String> deleteStakeholderById(@PathVariable String stakeholderId) {
		String url = "http://asm-stakeholder-service/delete-stakeholder/" + stakeholderId;
		restTemplate.delete(url);
		return new ResponseEntity<String>("stakeholder is deleted from db...", HttpStatus.OK);
	}
}

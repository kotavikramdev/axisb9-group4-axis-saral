package com.axisbank.employeeauthentication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.axisbank.employeeauthentication.microservice.Stakeholder;

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

}

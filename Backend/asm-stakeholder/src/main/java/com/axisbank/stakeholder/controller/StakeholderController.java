package com.axisbank.stakeholder.controller;

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

import com.axisbank.stakeholder.entity.Stakeholder;
import com.axisbank.stakeholder.service.StakeholderService;

@RestController
public class StakeholderController {
		
	@Autowired
	private StakeholderService stakeholderService;
	
	public StakeholderController() {
		
	}

	public StakeholderService getStakeholderService() {
		return stakeholderService;
	}

	public void setStakeholderService(StakeholderService stakeholderService) {
		this.stakeholderService = stakeholderService;
	}
	
//	------------------ GET MAPPING -------------------------
	
	@GetMapping("/stakeholders")
	public List<Stakeholder> getAllStakeholders(){
		return stakeholderService.getAllStakeholders();
	}
	
	@GetMapping("/stakeholder-project/{projectId}")
	public List<Stakeholder> getStakeholdersByProjectId(@PathVariable String projectId){
		return stakeholderService.getStakeholdersByProjectId(projectId);
	}
	
	@GetMapping("/stakeholder/{stakeholderId}")
	public Stakeholder getStakeholderById(@PathVariable String stakeholderId){
		return stakeholderService.getStakeholderById(stakeholderId);
	}

	@GetMapping("/stakeholder-count")
	public long countOfStakeholders() {
		return stakeholderService.getCountOfRows();
	}

//	------------------ POST MAPPING ------------------------
	
	@PostMapping("/add-stakeholder")
	public ResponseEntity<String> addStakeholder(@RequestBody Stakeholder stakeholder){
		stakeholderService.addStakeholder(stakeholder);
		return new ResponseEntity<String>("stakeholder added to db...",HttpStatus.CREATED);
	}
	
//	------------------ PUT MAPPING -------------------------
	
//	@PutMapping("/stakeholders/{stakeholderId}")
//	public ResponseEntity<String> updateStakeholder(@PathVariable String stakeholderId,@RequestBody Stakeholder newStakeholder){
//		if(!stakeholderId.equals(newStakeholder.getStakeholderId())) {
//			return new ResponseEntity<String>("stakeholder updated successfully....", HttpStatus.BAD_REQUEST);
//		}
//		else {
//			stakeholderService.updateStakeholder(stakeholderId, newStakeholder);
//			return new ResponseEntity<String>("stakeholder updated successfully....", HttpStatus.CREATED);
//		}
//	}
	
//	------------------ DELETE MAPPING ----------------------
	
	@DeleteMapping("/delete-stakeholder/{stakeholderId}")
	public ResponseEntity<String> deleteStakeholderById(@PathVariable String stakeholderId){
		stakeholderService.deleteStakeholderById(stakeholderId);
		return new ResponseEntity<String>("stakeholder is deleted from db...",HttpStatus.OK);
	}	

}
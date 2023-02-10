package com.axisbank.stakeholder.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axisbank.stakeholder.entity.Stakeholder;
import com.axisbank.stakeholder.repository.StakeholderRepository;

import java.util.List;

@Service
public class StakeholderServiceImpl implements StakeholderService {

    @Autowired
	private StakeholderRepository stakeholderRepository;
    
    @Override
    public List<Stakeholder> getAllStakeholders(){
		return (List<Stakeholder>) stakeholderRepository.findAll();
	}
    
    @Override
    public List<Stakeholder> getStakeholdersByProjectId(String projectId) {
    	return stakeholderRepository.getStakeholdersByProjectId(projectId);
    }
    
    @Override
	public Stakeholder getStakeholderById(String stakeholderId) {
		return stakeholderRepository.findById(stakeholderId).get();
	}	
	
    @Override
	public void addStakeholder(Stakeholder stakeholder) {
		stakeholderRepository.save(stakeholder);
	}
	
    @Override
	public void updateStakeholder(String stakeholderId, Stakeholder updatedStakeholder) {
		
	}
	
    @Override
	public void deleteStakeholderById(String stakeholderId) {
		stakeholderRepository.deleteById(stakeholderId);
	}
	
    @Override
	public long getCountOfRows() {
		return stakeholderRepository.count();
	}
	
}

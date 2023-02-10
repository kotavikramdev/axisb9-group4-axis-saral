package com.axisbank.stakeholder.service;

import java.util.List;

import com.axisbank.stakeholder.entity.Stakeholder;

public interface StakeholderService {

	List<Stakeholder> getAllStakeholders();
	List<Stakeholder> getStakeholdersByProjectId(String projectId);
	Stakeholder getStakeholderById(String stakeholderId);
	void addStakeholder(Stakeholder stakeholder);
	void updateStakeholder(String stakeholderId, Stakeholder updatedStakeholder);
	void deleteStakeholderById(String stakeholderId);
	long getCountOfRows();
	
}
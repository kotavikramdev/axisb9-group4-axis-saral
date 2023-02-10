package com.axisbank.employeeauthentication.microservice;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Stakeholder {

	@Id
	private String stakeholderId;
	private String stakeholderName;
	private String emailId;
	private long mobileNumber;
	private String projectId;

	public Stakeholder() {

	}

	public Stakeholder(String stakeholderId, String stakeholderName, String emailId, long mobileNumber,
			String projectId) {
		this.stakeholderId = stakeholderId;
		this.stakeholderName = stakeholderName;
		this.emailId = emailId;
		this.mobileNumber = mobileNumber;
		this.projectId = projectId;
	}

	public String getStakeholderId() {
		return stakeholderId;
	}

	public void setStakeholderId(String stakeholderId) {
		this.stakeholderId = stakeholderId;
	}

	public String getStakeholderName() {
		return stakeholderName;
	}

	public void setStakeholderName(String stakeholderName) {
		this.stakeholderName = stakeholderName;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public long getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(long mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getProjectId() {
		return projectId;
	}

	public void setProjectId(String projectId) {
		this.projectId = projectId;
	}

	@Override
	public String toString() {
		return "Stakeholder [stakeholderId=" + stakeholderId + ", stakeholderName=" + stakeholderName + ", emailId="
				+ emailId + ", mobileNumber=" + mobileNumber + ", projectId=" + projectId + "]";
	}

}

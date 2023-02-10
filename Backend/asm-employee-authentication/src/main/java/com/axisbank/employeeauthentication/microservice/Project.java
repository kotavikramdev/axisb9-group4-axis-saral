package com.axisbank.employeeauthentication.microservice;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Project {

	@Id
	private String projectId;
	private String projectName;
	private String projectDescription;
	private String projectOwner;
	private int teamSize;
	private String projectStatus;
	private String deadline;

	public Project() {

	}

	public Project(String projectId, String projectName, String projectDescription, String projectOwner, int teamSize,
			String projectStatus, String deadline) {
		this.projectId = projectId;
		this.projectName = projectName;
		this.projectDescription = projectDescription;
		this.projectOwner = projectOwner;
		this.teamSize = teamSize;
		this.projectStatus = projectStatus;
		this.deadline = deadline;
	}

	public String getProjectId() {
		return projectId;
	}

	public void setProjectId(String projectId) {
		this.projectId = projectId;
	}

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public String getProjectDescription() {
		return projectDescription;
	}

	public void setProjectDescription(String projectDescription) {
		this.projectDescription = projectDescription;
	}

	public String getProjectOwner() {
		return projectOwner;
	}

	public void setProjectOwner(String projectOwner) {
		this.projectOwner = projectOwner;
	}

	public int getTeamSize() {
		return teamSize;
	}

	public void setTeamSize(int teamSize) {
		this.teamSize = teamSize;
	}

	public String getProjectStatus() {
		return projectStatus;
	}

	public void setProjectStatus(String projectStatus) {
		this.projectStatus = projectStatus;
	}

	public String getDeadline() {
		return deadline;
	}

	public void setDeadline(String deadline) {
		this.deadline = deadline;
	}

	@Override
	public String toString() {
		return "Project [projectId=" + projectId + ", projectName=" + projectName + ", projectDescription="
				+ projectDescription + ", projectOwner=" + projectOwner + ", teamSize=" + teamSize + ", projectStatus="
				+ projectStatus + ", deadline=" + deadline + "]";
	}

}

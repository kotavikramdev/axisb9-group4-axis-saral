package com.axisbank.admin.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Admin {

	@Id
	private String adminId;
	private String adminName;
	private String emailId;
	private String password;

	public Admin() {

	}

	public Admin(String adminId, String adminName, String emailId, String password) {
		this.adminId = adminId;
		this.adminName = adminName;
		this.emailId = emailId;
		this.password = password;
	}

	public String getAdminId() {
		return adminId;
	}

	public void setAdminId(String adminId) {
		this.adminId = adminId;
	}

	public String getAdminName() {
		return adminName;
	}

	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Admin [adminId=" + adminId + ", adminName=" + adminName + ", emailId=" + emailId + ", password="
				+ password + "]";
	}

}

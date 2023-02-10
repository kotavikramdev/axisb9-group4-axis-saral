package com.axisbank.profileimage.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class ProfileImage {

	@Id
	private String userId;
	
	private String fileName;
	private String fileType;
	
	@Lob
	private byte[] data;

	public ProfileImage() {
		
	}

	public ProfileImage(String userId, String fileName, String fileType, byte[] data) {
		this.userId = userId;
		this.fileName = fileName;
		this.fileType = fileType;
		this.data = data;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getFileType() {
		return fileType;
	}

	public void setFileType(String fileType) {
		this.fileType = fileType;
	}

	public byte[] getData() {
		return data;
	}

	public void setData(byte[] data) {
		this.data = data;
	}
	
}

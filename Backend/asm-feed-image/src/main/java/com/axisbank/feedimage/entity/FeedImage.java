package com.axisbank.feedimage.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class FeedImage {

	@Id
	private String feedId;

	private String fileName;
	private String fileType;

	@Lob
	private byte[] feedImage;

	public FeedImage() {

	}

	public FeedImage(String feedId, String fileName, String fileType, byte[] feedImage) {
		this.feedId = feedId;
		this.fileName = fileName;
		this.fileType = fileType;
		this.feedImage = feedImage;
	}

	public String getFeedId() {
		return feedId;
	}

	public void setFeedId(String feedId) {
		this.feedId = feedId;
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

	public byte[] getFeedImage() {
		return feedImage;
	}

	public void setFeedImage(byte[] feedImage) {
		this.feedImage = feedImage;
	}

}

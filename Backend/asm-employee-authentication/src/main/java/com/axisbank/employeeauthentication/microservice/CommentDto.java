package com.axisbank.employeeauthentication.microservice;

import java.util.Date;

public class CommentDto {

	private int commentId;
	private String comment;
	private String commentedBy;
	private Date dateAndTime;

	public CommentDto() {

	}

	public CommentDto(int commentId, String comment, String commentedBy, Date dateAndTime) {
		this.commentId = commentId;
		this.comment = comment;
		this.commentedBy = commentedBy;
		this.dateAndTime = dateAndTime;
	}

	public int getCommentId() {
		return commentId;
	}

	public void setCommentId(int commentId) {
		this.commentId = commentId;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public String getCommentedBy() {
		return commentedBy;
	}

	public void setCommentedBy(String commentedBy) {
		this.commentedBy = commentedBy;
	}

	public Date getDateAndTime() {
		return dateAndTime;
	}

	public void setDateAndTime(Date dateAndTime) {
		this.dateAndTime = dateAndTime;
	}

}

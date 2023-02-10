package com.axisbank.employeeauthentication.microservice;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Comment {

	@Id
	@GeneratedValue
	private int commentId;
	private String comment;
	private String commentedBy;
	private Date dateAndTime;

	@ManyToOne
	private Feed feed;

	public Comment() {

	}

	public Comment(int commentId, String comment, String commentedBy, Date dateAndTime, Feed feed) {
		this.commentId = commentId;
		this.comment = comment;
		this.commentedBy = commentedBy;
		this.dateAndTime = dateAndTime;
		this.feed = feed;
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

	public Feed getFeed() {
		return feed;
	}

	public void setFeed(Feed feed) {
		this.feed = feed;
	}

	@Override
	public String toString() {
		return "Comment [commentId=" + commentId + ", comment=" + comment + ", commentedBy=" + commentedBy
				+ ", dateAndTime=" + dateAndTime + ", feed=" + feed + "]";
	}

}

package com.axisbank.employeeauthentication.microservice;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class FeedDto {

	private String feedId;
	private String feedTitle;
	private String caption;
	private String postedBy;
	private Date dateAndTime;
	private List<CommentDto> commentDto = new ArrayList<>();

	public FeedDto() {

	}

	public FeedDto(String feedId, String feedTitle, String caption, String postedBy, Date dateAndTime,
			List<CommentDto> commentDto) {
		this.feedId = feedId;
		this.feedTitle = feedTitle;
		this.caption = caption;
		this.postedBy = postedBy;
		this.dateAndTime = dateAndTime;
		this.commentDto = commentDto;
	}

	public String getFeedId() {
		return feedId;
	}

	public void setFeedId(String feedId) {
		this.feedId = feedId;
	}

	public String getFeedTitle() {
		return feedTitle;
	}

	public void setFeedTitle(String feedTitle) {
		this.feedTitle = feedTitle;
	}

	public String getCaption() {
		return caption;
	}

	public void setCaption(String caption) {
		this.caption = caption;
	}

	public String getPostedBy() {
		return postedBy;
	}

	public void setPostedBy(String postedBy) {
		this.postedBy = postedBy;
	}

	public Date getDateAndTime() {
		return dateAndTime;
	}

	public void setDateAndTime(Date dateAndTime) {
		this.dateAndTime = dateAndTime;
	}

	public List<CommentDto> getComments() {
		return commentDto;
	}

	public void setComments(List<CommentDto> commentDto) {
		this.commentDto = commentDto;
	}

}

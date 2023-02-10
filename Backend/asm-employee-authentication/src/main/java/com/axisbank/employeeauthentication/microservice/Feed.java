package com.axisbank.employeeauthentication.microservice;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Feed {

	@Id
	private String feedId;
	private String feedTitle;
	private String caption;
	private String postedBy;
	private Date dateAndTime;

	@OneToMany(mappedBy = "feed", cascade = CascadeType.ALL)
	private List<Comment> comments = new ArrayList<>();

	public Feed() {

	}

	public Feed(String feedId, String feedTitle, String caption, String postedBy, Date dateAndTime,
			List<Comment> comments) {
		this.feedId = feedId;
		this.feedTitle = feedTitle;
		this.caption = caption;
		this.postedBy = postedBy;
		this.dateAndTime = dateAndTime;
		this.comments = comments;
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

	public List<Comment> getComments() {
		return comments;
	}

	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}

	@Override
	public String toString() {
		return "Feed [feedId=" + feedId + ", feedTitle=" + feedTitle + ", caption=" + caption + ", postedBy=" + postedBy
				+ ", dateAndTime=" + dateAndTime + ", comments=" + comments + "]";
	}

}

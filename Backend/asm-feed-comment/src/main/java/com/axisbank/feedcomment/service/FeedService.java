package com.axisbank.feedcomment.service;

import java.util.List;

import com.axisbank.feedcomment.dto.FeedDto;
import com.axisbank.feedcomment.entity.Feed;

public interface FeedService {
	
	List<FeedDto> getAllFeeds();
	List<FeedDto> getFeedsByPostedBy(String postedBy);
	FeedDto getFeedById(String feedId);
	void addFeed(Feed feed);
	void deleteFeedById(String feedId);
	
}

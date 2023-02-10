package com.axisbank.feedcomment.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.axisbank.feedcomment.dto.FeedDto;
import com.axisbank.feedcomment.entity.Feed;
import com.axisbank.feedcomment.service.FeedService;

@RestController
public class FeedController {

	@Autowired
	private FeedService feedService;

	public FeedController() {

	}

	public FeedService getFeedService() {
		return feedService;
	}

	public void setFeedService(FeedService feedService) {
		this.feedService = feedService;
	}

//	------------------ GET MAPPING -------------------------

	@GetMapping("/feeds")
	public List<FeedDto> getAllFeeds() {
		return feedService.getAllFeeds();
	}
	
	@GetMapping("/feeds-by-postedby/{postedBy}")
	public List<FeedDto> getFeedsByPostedBy(@PathVariable String postedBy) {
		return feedService.getFeedsByPostedBy(postedBy);
	}

	@GetMapping("/feed/{feedId}")
	public FeedDto getFeedById(@PathVariable String feedId) {
		return feedService.getFeedById(feedId);
	}

//	------------------ POST MAPPING ------------------------

	@PostMapping("/add-feed")
	public ResponseEntity<String> addFeed(@RequestBody Feed feed) {
		feedService.addFeed(feed);
		return new ResponseEntity<>("Feed Added", HttpStatus.OK);
	}

//	------------------ PUT MAPPING -------------------------

//	------------------ DELETE MAPPING ----------------------

	@DeleteMapping("/delete-feed/{feedId}")
	public ResponseEntity<String> deleteFeedById(@PathVariable String feedId) {
		feedService.deleteFeedById(feedId);
		return new ResponseEntity<>("Feed with ID: " + feedId + " is deleted.", HttpStatus.OK);
	}

}

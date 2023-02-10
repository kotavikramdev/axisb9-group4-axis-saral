package com.axisbank.employeeauthentication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.axisbank.employeeauthentication.microservice.Feed;
import com.axisbank.employeeauthentication.microservice.FeedDto;

@RestController
@CrossOrigin(value = "http://localhost:3000")
public class AsmFeedController {

	@Autowired
	private RestTemplate restTemplate;

//	------------------ GET MAPPING -------------------------

	@SuppressWarnings("unchecked")
	@GetMapping("/feeds")
	public List<FeedDto> getAllFeeds() {
		String url = "http://asm-feed-comment-service/feeds";
		return restTemplate.getForObject(url, List.class);
	}

	@SuppressWarnings("unchecked")
	@GetMapping("/feeds-by-postedby/{postedBy}")
	public List<FeedDto> getFeedsByPostedBy(@PathVariable String postedBy) {
		String url = "http://asm-feed-comment-service/feeds-by-postedby/" + postedBy;
		return restTemplate.getForObject(url, List.class);
	}
	
//	------------------ POST MAPPING ------------------------

	@SuppressWarnings("unchecked")
	@PostMapping("/add-feed")
	public ResponseEntity<String> addFeed(@RequestBody Feed feed) {
		String url = "http://asm-feed-comment-service/add-feed/";
		try {
			return restTemplate.postForObject(url, feed, ResponseEntity.class);
		} catch (Exception e) {
			System.out.println(e);
		}
		return new ResponseEntity<>("Feed Added", HttpStatus.OK);
		
	}

//	------------------ PUT MAPPING -------------------------

//	------------------ DELETE MAPPING ----------------------

	@DeleteMapping("/delete-feed/{feedId}")
	public ResponseEntity<String> deleteFeedById(@PathVariable String feedId) {
		String url = "http://asm-feed-comment-service/delete-feed/" + feedId;
		restTemplate.delete(url);
		return new ResponseEntity<>("Feed deleted.", HttpStatus.OK);
	}

}

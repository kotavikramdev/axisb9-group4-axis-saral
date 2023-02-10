package com.axisbank.employeeauthentication.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.axisbank.employeeauthentication.microservice.Comment;

@RestController
@CrossOrigin(value = "http://localhost:3000")
public class AsmCommentController {

	@Autowired
	private RestTemplate restTemplate;

//	------------------ GET MAPPING -------------------------
//	------------------ POST MAPPING ------------------------

	@SuppressWarnings("unchecked")
	@PostMapping("/add-comment/{feedId}")
	public ResponseEntity<String> addComment(@RequestBody Comment comment, @PathVariable String feedId) {
		String url = "http://asm-feed-comment-service/add-comment/" + feedId;
		try {
			return restTemplate.postForObject(url, comment, ResponseEntity.class);
		} catch (Exception e) {
			System.out.println(e);
		}
		return new ResponseEntity<>("Comment Added", HttpStatus.OK);		
	}

//	------------------ PUT MAPPING -------------------------

//	------------------ DELETE MAPPING ----------------------

	@DeleteMapping("/delete-comment/{commentId}")
	public ResponseEntity<String> deleteCommentById(@PathVariable int commentId) {
		String url = "http://asm-feed-comment-service/delete-comment/" + commentId;
		restTemplate.delete(url);
		return new ResponseEntity<>("Comment deleted.", HttpStatus.OK);
	}
	
}

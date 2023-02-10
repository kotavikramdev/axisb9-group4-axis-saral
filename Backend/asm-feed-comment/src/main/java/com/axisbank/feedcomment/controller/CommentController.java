package com.axisbank.feedcomment.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.axisbank.feedcomment.entity.Comment;
import com.axisbank.feedcomment.service.CommentService;

@RestController
@CrossOrigin(value = "http://localhost:3000")
public class CommentController {

	@Autowired
	private CommentService commentService;

//	------------------ GET MAPPING -------------------------
//	------------------ POST MAPPING ------------------------

	@PostMapping("/add-comment/{feedId}")
	public ResponseEntity<String> addComment(@RequestBody Comment comment, @PathVariable String feedId) {
		commentService.addComment(comment, feedId);
		return new ResponseEntity<>("Comment Added", HttpStatus.CREATED);
	}

//	------------------ PUT MAPPING -------------------------

//	------------------ DELETE MAPPING ----------------------

	@DeleteMapping("/delete-comment/{commentId}")
	public ResponseEntity<String> deleteCommentById(@PathVariable int commentId) {
		commentService.deleteComment(commentId);
		return new ResponseEntity<>("Comment with ID: " + commentId + " is deleted.", HttpStatus.OK);
	}
	
}

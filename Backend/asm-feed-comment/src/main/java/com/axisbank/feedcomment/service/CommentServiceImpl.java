package com.axisbank.feedcomment.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axisbank.feedcomment.entity.Comment;
import com.axisbank.feedcomment.entity.Feed;
import com.axisbank.feedcomment.repository.CommentRepository;
import com.axisbank.feedcomment.repository.FeedRepository;

@Service
public class CommentServiceImpl implements CommentService {

	@Autowired
	private FeedRepository feedRepository;

	@Autowired
	private CommentRepository commentRepository;

	@Override
	public void addComment(Comment comment, String feedId) {
		Feed feed = feedRepository.findById(feedId).get();
		comment.setFeed(feed);
		commentRepository.save(comment);
	}

	@Override
	public void deleteComment(int commentId) {
		commentRepository.deleteById(commentId);
	}

}

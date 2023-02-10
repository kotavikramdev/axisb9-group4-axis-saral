package com.axisbank.feedcomment.service;

import com.axisbank.feedcomment.entity.Comment;

public interface CommentService {
	
	void addComment(Comment comment,String feedId);
	void deleteComment(int commentId);
	
}

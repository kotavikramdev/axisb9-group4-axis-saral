package com.axisbank.feedcomment.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.axisbank.feedcomment.entity.Comment;

@Repository
public interface CommentRepository extends CrudRepository<Comment, Integer> {

}

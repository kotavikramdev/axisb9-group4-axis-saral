package com.axisbank.feedcomment.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.axisbank.feedcomment.entity.Feed;

@Repository
public interface FeedRepository extends JpaRepository<Feed, String> {

	@Transactional
	@Query("select f from Feed f where f.postedBy=:postedBy")
	List<Feed> getFeedsByPostedBy(String postedBy);
	
}

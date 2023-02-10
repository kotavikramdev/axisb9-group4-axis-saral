package com.axisbank.feedimage.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.axisbank.feedimage.entity.FeedImage;

@Repository
public interface FeedImageRepository extends JpaRepository<FeedImage, String> {
	
}

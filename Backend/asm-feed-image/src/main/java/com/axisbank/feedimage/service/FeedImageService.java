package com.axisbank.feedimage.service;

import org.springframework.web.multipart.MultipartFile;

import com.axisbank.feedimage.entity.FeedImage;

public interface FeedImageService {

	FeedImage getFeedImageById(String feedId);
	void addFeedImage(String feedId, MultipartFile file);
	
}

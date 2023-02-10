package com.axisbank.feedimage.service;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.axisbank.feedimage.entity.FeedImage;
import com.axisbank.feedimage.exception.FeedImageNotFoundException;
import com.axisbank.feedimage.exception.FeedImageStorageException;
import com.axisbank.feedimage.repository.FeedImageRepository;

@Service
public class FeedImageServiceImpl implements FeedImageService {

	@Autowired
	private FeedImageRepository feedImageRepository;

	@Override
	public FeedImage getFeedImageById(String feedId) {
		return feedImageRepository.findById(feedId)
				.orElseThrow(() -> new FeedImageNotFoundException("Image not Exist for Feed ID: " + feedId));
	}

	@Override
	public void addFeedImage(String feedId, MultipartFile file) {
		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
		try {
			if (fileName.contains("..")) {
				throw new FeedImageStorageException("Sorry! Filename contains Invalid Path Sequence" + fileName);
			}
			FeedImage feedImage = new FeedImage(feedId, fileName, file.getContentType(), file.getBytes());
			feedImageRepository.save(feedImage);
		} catch (IOException e) {
			throw new FeedImageStorageException("Could not store file " + fileName + ". Please try again!");
		}
	}

}

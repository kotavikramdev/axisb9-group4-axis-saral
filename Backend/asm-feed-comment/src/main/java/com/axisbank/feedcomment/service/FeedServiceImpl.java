package com.axisbank.feedcomment.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axisbank.feedcomment.dto.FeedDto;
import com.axisbank.feedcomment.entity.Feed;
import com.axisbank.feedcomment.repository.FeedRepository;

@Service
public class FeedServiceImpl implements FeedService {

	@Autowired
	private FeedRepository feedRepository;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public List<FeedDto> getAllFeeds() {
		List<Feed> allFeeds = (List<Feed>) feedRepository.findAll();
		List<FeedDto> feedDtos = allFeeds.stream().map((feed) -> this.modelMapper.map(feed, FeedDto.class))
				.collect(Collectors.toList());
		return feedDtos;
	}

	@Override
	public List<FeedDto> getFeedsByPostedBy(String postedBy) {
		List<Feed> feedsByPostedBy = (List<Feed>) feedRepository.getFeedsByPostedBy(postedBy);
		List<FeedDto> feedDtos = feedsByPostedBy.stream().map((feed) -> this.modelMapper.map(feed, FeedDto.class))
				.collect(Collectors.toList());
		return feedDtos;
	}
	
	@Override
	public FeedDto getFeedById(String feedId) {
		Feed feed = feedRepository.findById(feedId).get();
		FeedDto feedDto = modelMapper.map(feed, FeedDto.class);
		return feedDto;
	}

	@Override
	public void addFeed(Feed feed) {
		feedRepository.save(feed);
	}

	@Override
	public void deleteFeedById(String feedId) {
		feedRepository.deleteById(feedId);
	}

}

package com.axisbank.profileimage.service;

import org.springframework.web.multipart.MultipartFile;

import com.axisbank.profileimage.entity.ProfileImage;

public interface ProfileImageService {

	ProfileImage getProfileImageById(String userId);
	void addProfileImage(String userId, MultipartFile file);
	void updateProfileImage(String userId, MultipartFile file);
	
}

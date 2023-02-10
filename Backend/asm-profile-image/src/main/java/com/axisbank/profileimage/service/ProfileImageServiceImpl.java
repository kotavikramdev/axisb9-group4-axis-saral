package com.axisbank.profileimage.service;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.axisbank.profileimage.entity.ProfileImage;
import com.axisbank.profileimage.exception.ProfileImageNotFoundException;
import com.axisbank.profileimage.exception.ProfileImageStorageException;
import com.axisbank.profileimage.repository.ProfileImageRepository;

@Service
public class ProfileImageServiceImpl implements ProfileImageService {

	@Autowired
	private ProfileImageRepository profileImageRepository;

	@Override
	public ProfileImage getProfileImageById(String userId) {
		return profileImageRepository.findById(userId).orElseThrow(() -> new ProfileImageNotFoundException("Image not Exist for User ID: " + userId));
	}

	@Override
	public void addProfileImage(String userId, MultipartFile file) {
		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
		try {
			if(fileName.contains("..")) {
				throw new ProfileImageStorageException("Sorry! Filename contains Invalid Path Sequence" + fileName);
			}
			ProfileImage profileImage = new ProfileImage(userId, fileName, file.getContentType(), file.getBytes());
			profileImageRepository.save(profileImage);
		} catch(IOException e) {
			throw new ProfileImageStorageException("Could not store file " + fileName + ". Please try again!");
		}
	}

	@Override
	public void updateProfileImage(String userId, MultipartFile file) {
		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
		try {
			if(fileName.contains("..")) {
				throw new ProfileImageStorageException("Sorry! Filename contains Invalid Path Sequence" + fileName);
			}
			ProfileImage profileImage = new ProfileImage(userId, fileName, file.getContentType(), file.getBytes());
			profileImageRepository.save(profileImage);
		} catch(IOException e) {
			throw new ProfileImageStorageException("Could not store file " + fileName + ". Please try again!");
		}
	}	
	
}

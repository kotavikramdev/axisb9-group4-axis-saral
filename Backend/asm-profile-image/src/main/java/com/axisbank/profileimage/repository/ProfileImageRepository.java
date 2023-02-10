package com.axisbank.profileimage.repository;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Modifying;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
//import org.springframework.transaction.annotation.Transactional;
//import org.springframework.web.multipart.MultipartFile;

import com.axisbank.profileimage.entity.ProfileImage;

@Repository
public interface ProfileImageRepository extends JpaRepository<ProfileImage, String> {

//	@Transactional
//	@Modifying
//	@Query("update ProfileImage pi set pi.data=:data where pi.userId=:userId")
//	void updateProfileImage(@Param("userId") String userId, @Param("file") MultipartFile data);
}

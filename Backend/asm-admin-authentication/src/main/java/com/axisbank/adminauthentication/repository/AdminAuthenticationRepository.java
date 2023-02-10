package com.axisbank.adminauthentication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.axisbank.adminauthentication.microservice.Admin;

@Repository
public interface AdminAuthenticationRepository extends JpaRepository<Admin, String> {
	public Admin getAdminDetailsByEmailId(String emailId);
}

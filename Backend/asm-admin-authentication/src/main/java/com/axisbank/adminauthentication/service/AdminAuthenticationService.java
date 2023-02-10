package com.axisbank.adminauthentication.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.axisbank.adminauthentication.entity.AdminDetails;
import com.axisbank.adminauthentication.microservice.Admin;
import com.axisbank.adminauthentication.repository.AdminAuthenticationRepository;

@Service
public class AdminAuthenticationService implements UserDetailsService {

	@Autowired
	private AdminAuthenticationRepository adminAuthenticationRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		final Admin admin = adminAuthenticationRepository.getAdminDetailsByEmailId(username);
		if (admin == null) {
			throw new UsernameNotFoundException("User not found !!");
		} else {
			return new AdminDetails(admin);
		}
	}
	
}

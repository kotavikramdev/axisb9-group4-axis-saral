package com.axisbank.employeeauthentication.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.axisbank.employeeauthentication.microservice.Employee;
import com.axisbank.employeeauthentication.entity.EmployeeDetails;
import com.axisbank.employeeauthentication.repository.EmployeeAuthenticationRepository;

@Service
public class EmployeeAuthenticationService implements UserDetailsService {
	
	@Autowired
	private EmployeeAuthenticationRepository employeeAuthenticationRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		final Employee employee = employeeAuthenticationRepository.getEmployeeDetailsByEmailId(username);
		if (employee == null) {
			throw new UsernameNotFoundException("User not found !!");
		} else {
			return new EmployeeDetails(employee);
		}
	}

}

package com.axisbank.admin.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axisbank.admin.entity.Admin;
import com.axisbank.admin.repository.AdminRepository;

@Service
public class AdminServiceImpl implements AdminService {

	@Autowired
	private AdminRepository adminRepository;

	@Override
	public Admin getAdminById(String adminId) {
		return adminRepository.findById(adminId).get();
	}

}

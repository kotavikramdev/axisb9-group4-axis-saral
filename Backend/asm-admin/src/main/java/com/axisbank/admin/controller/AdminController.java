package com.axisbank.admin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.axisbank.admin.entity.Admin;
import com.axisbank.admin.service.AdminService;

@RestController
@CrossOrigin(value = "http://localhost:3000")
public class AdminController {

	@Autowired
	private AdminService adminService;

	public AdminController() {

	}

	public AdminService getAdminService() {
		return adminService;
	}

	public void setAdminService(AdminService adminService) {
		this.adminService = adminService;
	}

//	------------------ GET MAPPING -------------------------
	
	@GetMapping("/admin/{adminId}")
	public Admin getAdminById(@PathVariable String adminId) {
		return adminService.getAdminById(adminId);
	}

//	------------------ POST MAPPING ------------------------
//	------------------ PUT MAPPING -------------------------
//	------------------ DELETE MAPPING ----------------------

}

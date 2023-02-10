package com.axisbank.admin;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.axisbank.admin.controller.AdminController;
import com.axisbank.admin.entity.Admin;
import com.axisbank.admin.service.AdminService;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = AsmAdminApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
class AsmAdminApplicationTests {

	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private AdminService adminService;

	@BeforeEach
	public void setup() {
		AdminController adminController = new AdminController();
		adminController.setAdminService(adminService);
		mockMvc = MockMvcBuilders.standaloneSetup(adminController).build();
	}

	Admin admin = new Admin("admin", "admin", "admin@gmail.com", "admin");

	@Test
	public void getAdminByIdTest() throws Exception {
		Mockito.when(adminService.getAdminById(Mockito.anyString())).thenReturn(admin);
		MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.get("/admin/admin")
				.accept(MediaType.APPLICATION_JSON);
		MvcResult result = mockMvc.perform(requestBuilder).andReturn();
		String expectedAdmin = "{" + "  'adminId': 'admin', " + "  'adminName': 'admin', "
				+ "  'emailId': 'admin@gmail.com', " + "  'password': 'admin' " + "}";
		JSONAssert.assertEquals(expectedAdmin, result.getResponse().getContentAsString(), false);
	}

}

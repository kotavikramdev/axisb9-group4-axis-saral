package com.axisbank.stakeholder;

import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.List;

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

import com.axisbank.stakeholder.controller.StakeholderController;
import com.axisbank.stakeholder.entity.Stakeholder;
import com.axisbank.stakeholder.service.StakeholderService;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = AsmStakeholderApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
class AsmStakeholderApplicationTests {

	@Autowired
	private MockMvc mockMvc;
	
	@MockBean
	private StakeholderService stakeholderService;
	
	@BeforeEach
	public void setup() {
		StakeholderController stakeholderController = new StakeholderController();
		stakeholderController.setStakeholderService(stakeholderService);
		mockMvc = MockMvcBuilders.standaloneSetup(stakeholderController).build();
	}
	
	Stakeholder stakeholder = new Stakeholder("SH-1", "Nasreena", "nasreena@gmail.com", 97456327119L, "P-1");
	List<Stakeholder> stakeholderList = new ArrayList<>();
	Stakeholder stakeholder1 = new Stakeholder("SH-2", "Nasree", "nasree@gmail.com", 97456327349L, "P-2");
	Stakeholder stakeholder2 = new Stakeholder("SH-3", "Parvin", "parvin@gmail.com", 97456327349L, "P-3");
	
	@Test
	public void getAllStakeholdersTest() throws Exception {
		stakeholderList.add(stakeholder1);
		stakeholderList.add(stakeholder2);
		Mockito.when(stakeholderService.getAllStakeholders()).thenReturn(stakeholderList);
		MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.get("/stakeholders")
				.accept(MediaType.APPLICATION_JSON);
		MvcResult result = mockMvc.perform(requestBuilder).andReturn();
		String expectedStakeholderList = "["
				+ "{ 'stakeholderId': 'SH-2', "
				+ "  'stakeholderName': 'Nasree', "
				+ "  'emailId': 'nasree@gmail.com', "
				+ "  'mobileNumber': 97456327349, "
				+ "  'projectId': 'P-2' },"
				+ "{ 'stakeholderId': 'SH-3',"
				+ "  'stakeholderName': 'Parvin',"
				+ "	 'emailId': 'parvin@gmail.com', "
				+ "	 'mobileNumber': 97456327349,"
				+ "	 'projectId': 'P-3' }]";                         
		JSONAssert.assertEquals(expectedStakeholderList, result.getResponse().getContentAsString(), false);
	}

	@Test
	public void getStakeholderByIdTest() throws Exception {
		Mockito.when(stakeholderService.getStakeholderById(Mockito.anyString())).thenReturn(stakeholder);
		MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.get("/stakeholder/SH-1")
				.accept(MediaType.APPLICATION_JSON);
		MvcResult result = mockMvc.perform(requestBuilder).andReturn();
		String expectedStakeholder = "{"
				+ "  'stakeholderId': 'SH-1', "
				+ "  'stakeholderName': 'Nasreena', "
				+ "  'emailId': 'nasreena@gmail.com', "
				+ "  'mobileNumber': 97456327119, "
				+ "  'projectId': 'P-1' "
				+ "}";
		JSONAssert.assertEquals(expectedStakeholder, result.getResponse().getContentAsString(), false);
	}
	
	@Test
	public void countOfStakeholdersTest() throws Exception {
		stakeholderList.add(stakeholder1);
		stakeholderList.add(stakeholder2);
		Mockito.when(stakeholderService.getCountOfRows()).thenReturn((long) stakeholderList.size());
		MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.get("/stakeholder-count");
		MvcResult result = mockMvc.perform(requestBuilder).andReturn();
		String expectedStakeholderCount = "2";
		assertEquals(expectedStakeholderCount, result.getResponse().getContentAsString());
	}

}

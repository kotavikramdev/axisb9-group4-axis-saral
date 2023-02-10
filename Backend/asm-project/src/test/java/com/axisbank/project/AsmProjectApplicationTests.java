package com.axisbank.project;

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

import com.axisbank.project.controller.ProjectController;
import com.axisbank.project.entity.Project;
import com.axisbank.project.service.ProjectService;


@RunWith(SpringRunner.class)
@SpringBootTest(classes = AsmProjectApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
class AsmProjectApplicationTests {

	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private ProjectService projectService;

	@BeforeEach
	public void setup() {
		ProjectController projectController = new ProjectController();
		projectController.setProjectService(projectService);
		mockMvc = MockMvcBuilders.standaloneSetup(projectController).build();
	}

	Project project = new Project("P-1", "Ram", "This is Project-1", "Shiva", 6, "Completed", "2022-01-01");
	List<Project> projectList = new ArrayList<>();
	Project project1 = new Project("P-2", "Abdul", "This is Project-2", "Akbar", 7, "In Progress", "2022-10-05");
	Project project2 = new Project("P-3", "Sriram", "This is Project-3", "Krishna", 8, "Review", "2022-01-05");

	@Test
	public void getAllProjectsTest() throws Exception {
		projectList.add(project1);
		projectList.add(project2);
		Mockito.when(projectService.getAllProjects()).thenReturn(projectList);
		MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.get("/projects")
				.accept(MediaType.APPLICATION_JSON);
		MvcResult result = mockMvc.perform(requestBuilder).andReturn();
		String expectedProjectList = "["
				+ "{ 'projectId': 'P-2', "
				+ "  'projectName': 'Abdul', "
				+ "  'projectDescription': 'This is Project-2', "
				+ "  'projectOwner': 'Akbar', "
				+ "  'teamSize': 7, "
				+ "  'projectStatus': 'In Progress', "
				+ "  'deadline': '2022-10-05' },"
				+ "{ 'projectId': 'P-3',"
				+ "  'projectName': 'Sriram',"
				+ "  'projectDescription': 'This is Project-3', "
				+ "	 'projectOwner': 'Krishna', "
				+ "	 'teamSize': 8,"
				+ "	 'projectStatus': 'Review', "
				+ "	 'deadline': '2022-01-05' }]";
		JSONAssert.assertEquals(expectedProjectList, result.getResponse().getContentAsString(), false);
	}
	
	@Test
	public void getProjectByIdTest() throws Exception {
		Mockito.when(projectService.getProjectById(Mockito.anyString())).thenReturn(project);
		MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.get("/project/P-1")
				.accept(MediaType.APPLICATION_JSON);
		MvcResult result = mockMvc.perform(requestBuilder).andReturn();
		String expectedProject = "{"
				+ "  'projectId': 'P-1', "
				+ "  'projectName': 'Ram', "
				+ "  'projectDescription': 'This is Project-1', "
				+ "  'projectOwner': 'Shiva', "
				+ "  'teamSize': 6, "
				+ "  'projectStatus': 'Completed', "
				+ "  'deadline': '2022-01-01' "
				+ "}";
		JSONAssert.assertEquals(expectedProject, result.getResponse().getContentAsString(), false);
	}
	
	@Test
	public void countOfProjectsTest() throws Exception {
		projectList.add(project1);
		projectList.add(project2);
		Mockito.when(projectService.getCountOfRows()).thenReturn((long) projectList.size());
		MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.get("/project-count");
		MvcResult result = mockMvc.perform(requestBuilder).andReturn();
		String expectedProjectCount = "2";
		assertEquals(expectedProjectCount, result.getResponse().getContentAsString());
	}

}

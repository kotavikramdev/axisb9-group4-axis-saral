package com.axisbank.employee;

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

import com.axisbank.employee.controller.EmployeeController;
import com.axisbank.employee.entity.Employee;
import com.axisbank.employee.service.EmployeeService;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = AsmEmployeeApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
class AsmEmployeeApplicationTests {

	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private EmployeeService employeeService;

	@BeforeEach
	public void setup() {
		EmployeeController employeeController = new EmployeeController();
		employeeController.setEmployeeService(employeeService);
		mockMvc = MockMvcBuilders.standaloneSetup(employeeController).build();
	}

	Employee employee = new Employee("EMP-1", "Ram", "ram@axisbank.com", 9876543210L, "Developer", "Krishna", "Project-1",
			"2022-01-01", 40000.00, "ram@123");
	List<Employee> employeeList = new ArrayList<>();
	Employee employee1 = new Employee("EMP-2", "Abdul", "abdul@axisbank.com", 8451230225L, "Support", "Shiva", "Project-2",
			"2022-10-05", 30000.20, "abdul@123");
	Employee employee2 = new Employee("EMP-3", "Sriram", "sriram@axisbank.com", 7400254861L, "Tester", "Krishna", "Project-1",
			"2022-01-05", 40000.00, "sriram@123");

	@Test
	public void getAllEmployeesTest() throws Exception {
		employeeList.add(employee1);
		employeeList.add(employee2);
		Mockito.when(employeeService.getAllEmployees()).thenReturn(employeeList);
		MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.get("/employees")
				.accept(MediaType.APPLICATION_JSON);
		MvcResult result = mockMvc.perform(requestBuilder).andReturn();
		String expectedEmployeeList = "["
				+ "{ 'employeeId': 'EMP-2', "
				+ "  'employeeName': 'Abdul', "
				+ "  'emailId': 'abdul@axisbank.com', "
				+ "  'mobileNumber': 8451230225, "
				+ "  'designation': 'Support', "
				+ "  'supervisor': 'Shiva', "
				+ "  'currentProject': 'Project-2', "
				+ "  'joiningDate': '2022-10-05', "
				+ "  'salary': 30000.20, "
				+ "  'password': 'abdul@123' },"
				+ "{ 'employeeId': 'EMP-3',"
				+ "  'employeeName': 'Sriram',"
				+ "	 'emailId': 'sriram@axisbank.com', "
				+ "	 'mobileNumber': 7400254861,"
				+ "  'designation': 'Tester', "
				+ "	 'supervisor': 'Krishna', "
				+ "	 'currentProject': 'Project-1', "
				+ "	 'joiningDate': '2022-01-05', "
				+ "	 'salary': 40000.00, "
				+ "	 'password': 'sriram@123' }]";
		JSONAssert.assertEquals(expectedEmployeeList, result.getResponse().getContentAsString(), false);
	}
	
	@Test
	public void getEmployeeByIdTest() throws Exception {
		Mockito.when(employeeService.getEmployeeById(Mockito.anyString())).thenReturn(employee);
		MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.get("/employee/EMP-1")
				.accept(MediaType.APPLICATION_JSON);
		MvcResult result = mockMvc.perform(requestBuilder).andReturn();
		String expectedEmployee = "{"
				+ "  'employeeId': 'EMP-1', "
				+ "  'employeeName': 'Ram', "
				+ "  'emailId': 'ram@axisbank.com', "
				+ "  'mobileNumber': 9876543210, "
				+ "  'designation': 'Developer', "
				+ "  'supervisor': 'Krishna', "
				+ "  'currentProject': 'Project-1', "
				+ "  'joiningDate': '2022-01-01', "
				+ "  'salary': 40000.00, "
				+ "  'password': 'ram@123' "
				+ "}";
		JSONAssert.assertEquals(expectedEmployee, result.getResponse().getContentAsString(), false);
	}
	
	@Test
	public void countOfEmployeesTest() throws Exception {
		employeeList.add(employee1);
		employeeList.add(employee2);
		Mockito.when(employeeService.getCountOfRows()).thenReturn((long) employeeList.size());
		MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.get("/employee-count");
		MvcResult result = mockMvc.perform(requestBuilder).andReturn();
		String expectedEmployeeCount = "2";
		assertEquals(expectedEmployeeCount, result.getResponse().getContentAsString());
	}

}

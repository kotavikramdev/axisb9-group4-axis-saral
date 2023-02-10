package com.axisbank.feedcomment;

import java.util.ArrayList;
import java.util.Date;
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

import com.axisbank.feedcomment.controller.FeedController;
import com.axisbank.feedcomment.dto.CommentDto;
import com.axisbank.feedcomment.dto.FeedDto;
import com.axisbank.feedcomment.service.FeedService;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = AsmFeedCommentApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
class AsmFeedCommentApplicationTests {

	@Autowired
	private MockMvc mockMvc;
	
	@MockBean
	private FeedService feedService;
	
	@BeforeEach
	public void setup() {
		FeedController feedController = new FeedController();
		feedController.setFeedService(feedService);
		mockMvc = MockMvcBuilders.standaloneSetup(feedController).build();
	}
	

	List<FeedDto> feedList = new ArrayList<>();
	List<CommentDto> commentList1 = new ArrayList<>();
	List<CommentDto> commentList2 = new ArrayList<>();
	List<CommentDto> commentList3 = new ArrayList<>();

	@SuppressWarnings("deprecation")
	Date day1 = new Date(2023, 01, 04);
	@SuppressWarnings("deprecation")
	Date day2 = new Date(2023, 01, 05);
	
	CommentDto comment1 = new CommentDto(103, "Great News!! Congrats", "Arjun", day1);
	CommentDto comment2 = new CommentDto(102, "Thanks!!!", "Sita", day1);
	CommentDto comment3 = new CommentDto(101, "Congrats!!!", "Adhiraj", day2);
	
	@Test
	public void getAllFeedsTest() throws Exception {
		commentList2.add(comment1);
		commentList3.add(comment2);
		commentList3.add(comment3);
		FeedDto feed1 = new FeedDto("F3", "Hello Everyone", "This is my Post", "Shyam", day1, commentList2);
		FeedDto feed2 = new FeedDto("F4", "My First Feed", "Please Share your feedback", "Ram", day2, commentList3);
		feedList.add(feed1);
		feedList.add(feed2);
		Mockito.when(feedService.getAllFeeds()).thenReturn(feedList);
		MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.get("/feeds")
				.accept(MediaType.APPLICATION_JSON);
		MvcResult result = mockMvc.perform(requestBuilder).andReturn();
		String expectedFeedList = "[{"
				+ "	'feedId' : 'F3', "
				+ "	'feedTitle' : 'Hello Everyone', "
				+ "	'caption': 'This is my Post', "
				+ "	'postedBy': 'Shyam', "
				+ " 'dateAndTime': 61633593000000, "
					+ "	'comments': [{"
						+ "	'commentId': 103,"
						+ "	'comment': 'Great News!! Congrats',"
						+ "	'commentedBy': 'Arjun',"
						+ "	'dateAndTime': 61633593000000}"
						+ "	]"
					+ "	},"
					+ "{'feedId':'F4',"
					+ "'feedTitle':'My First Feed',"
					+ "'caption':'Please Share your feedback',"
					+ "'postedBy':'Ram',"
					+ "'dateAndTime': 61633679400000,"
					+ "'comments':"
						+ "["
							+ "{'commentId':101,"
							+ "'comment':'Congrats!!!',"
							+ "'commentedBy':'Adhiraj',"
							+ "'dateAndTime':61633679400000"
							+ "},"
							+ "{'commentId':102,"
							+ "'comment':'Thanks!!!',"
							+ "'commentedBy':'Sita',"
							+ "'dateAndTime':61633593000000"
							+ "}"
						+ "]"
					+ "}"
				+ "]";
		JSONAssert.assertEquals(expectedFeedList, result.getResponse().getContentAsString(), false);
	}

	@Test
	public void getFeedByIdTest() throws Exception{
		commentList1.add(comment1);
		FeedDto feed1 = new FeedDto("F3", "Hello Everyone", "This is my Post", "Shyam", day1, commentList1);
		Mockito.when(feedService.getFeedById(Mockito.anyString())).thenReturn(feed1);
		MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.get("/feed/F3")
				.accept(MediaType.APPLICATION_JSON);
		MvcResult result = mockMvc.perform(requestBuilder).andReturn();
		String expectedFeed = "{"
				+ "'feedId' : 'F3',"
				+ "'feedTitle' : 'Hello Everyone',"
				+ "'caption': 'This is my Post',"
				+ "'postedBy': 'Shyam',"
				+ "'dateAndTime': 61633593000000,"
					+ "'comments': ["
						+ "{'commentId':103,"
						+ "'comment':'Great News!! Congrats',"
						+ "'commentedBy':'Arjun',"
						+ "'dateAndTime':61633593000000}"
						+ "]"
				+"}";
		JSONAssert.assertEquals(expectedFeed, result.getResponse().getContentAsString(), false);
	}
	
}

package com.axisbank.employeedocument.service;

import java.util.List;

import javax.activation.DataHandler;
import javax.mail.MessagingException;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.util.ByteArrayDataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.axisbank.employeedocument.entity.EmailDetails;
import com.axisbank.employeedocument.entity.EmployeeDocument;
import com.axisbank.employeedocument.repository.EmployeeDocumentRepository;

@Service
public class EmployeeDocumentServiceImpl implements EmployeeDocumentService {

	@Autowired
	private EmployeeDocumentRepository employeeDocumentRepository;

	@Autowired
	private JavaMailSender javaMailSender;

	@Value("${spring.mail.username}")
	private String sender;

	@Override
	public EmployeeDocument getEmployeeDocument(String employeeId, String emailId, String documentName)
			throws MessagingException {
		EmployeeDocument employeeDocument = employeeDocumentRepository.getEmployeeDocument(employeeId, documentName);
		byte[] file = employeeDocument.getDocument();
		ByteArrayDataSource byteArrayDataSource = new ByteArrayDataSource(file, "application/octet-stream");
		MimeBodyPart attachmentPart = new MimeBodyPart();
		attachmentPart.setDataHandler(new DataHandler(byteArrayDataSource));
		attachmentPart.setFileName(employeeId + "_" + documentName + ".pdf");
		MimeMessage message = javaMailSender.createMimeMessage();

		MimeMessageHelper helper = new MimeMessageHelper(message, true);
		helper.setTo(emailId);
		helper.setSubject("Requested " + documentName);
		helper.setText("Hello " + employeeId + " Find below attached" + documentName + ".");
		helper.addAttachment(employeeId + "-" + documentName + ".pdf", byteArrayDataSource);

		javaMailSender.send(message);

		return employeeDocument;
	}

	@Override
	public void addEmployeeDocument(EmployeeDocument employeeDocument) {
		employeeDocumentRepository.save(employeeDocument);

	}

	@Override
	public void deleteEmployeeDocumentById(String employeeDocumentId) {
		employeeDocumentRepository.deleteById(employeeDocumentId);

	}

//	@Override
//	public void sendEmployeeDocument(String emailId, byte[] file) throws MessagingException {
//		ByteArrayDataSource byteArrayDataSource = new ByteArrayDataSource(file, "application/octet-stream");
//		MimeBodyPart attachmentPart = new MimeBodyPart();
//		attachmentPart.setDataHandler(new DataHandler(byteArrayDataSource));
//		attachmentPart.setFileName("Axis.pdf");
//		MimeMessage message = javaMailSender.createMimeMessage();
//
//		MimeMessageHelper helper = new MimeMessageHelper(message, true);
//		helper.setTo(emailId);
//		helper.setSubject("Please see your Details");
//		helper.setText("Hello Pratik take a look at your document");
//		helper.addAttachment("Axis.pdf", byteArrayDataSource);
//
//		javaMailSender.send(message);
//	}

	@Override
	public List<EmployeeDocument> getEmployeeDocuments(String employeeId) {
		return employeeDocumentRepository.getProjectDocuments(employeeId);
	}

	@Override
	public List<EmployeeDocument> getSalarySlip(String employeeId) {
		return employeeDocumentRepository.getSalarySlip(employeeId);
	}

	@Override
	public List<EmployeeDocument> getOtherDocument(String employeeId) {
		return employeeDocumentRepository.getOtherDocs(employeeId);
	}

	@Override
	public void sendNotification(EmailDetails emailDetails) {
		try {
			SimpleMailMessage sendNotification = new SimpleMailMessage();
			sendNotification.setFrom(sender);
			sendNotification.setTo(emailDetails.getEmailId());
			sendNotification.setText(emailDetails.getMessageBody());
			sendNotification.setSubject(emailDetails.getMessageSubject());
			javaMailSender.send(sendNotification);
			System.out.println("Notification sent successfully!!");
		} catch (Exception e) {
			System.out.println(e);
		}
	}

}

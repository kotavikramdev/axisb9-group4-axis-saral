package com.axisbank.employeedocument.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.axisbank.employeedocument.entity.EmployeeDocument;

@Repository
public interface EmployeeDocumentRepository extends JpaRepository<EmployeeDocument, String> {

	@Transactional
	@Query("select d from EmployeeDocument d where d.employeeId=:employeeId and d.documentName=:documentName")
	EmployeeDocument getEmployeeDocument(@Param("employeeId") String employeeId,@Param("documentName") String documentName);
	
	@Transactional
	@Query("select d from EmployeeDocument d where d.employeeId=:employeeId")
	List<EmployeeDocument> getProjectDocuments(@Param("employeeId") String employeeId);
	
	@Transactional
	@Query("select d from EmployeeDocument d where d.documentName like 'SalarySlip%' and d.employeeId=:employeeId")
	List<EmployeeDocument> getSalarySlip(@Param("employeeId") String employeeId);
	
	@Transactional
	@Query("select d from EmployeeDocument d where not d.documentName like 'SalarySlip%' and d.employeeId=:employeeId")
	List<EmployeeDocument> getOtherDocs(@Param("employeeId") String employeeId);

}

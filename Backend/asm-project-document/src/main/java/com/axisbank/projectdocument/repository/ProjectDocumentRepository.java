package com.axisbank.projectdocument.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.axisbank.projectdocument.entity.ProjectDocument;

@Repository
public interface ProjectDocumentRepository extends JpaRepository<ProjectDocument, String> {

	@Transactional
	@Query("select d from ProjectDocument d where d.projectId=:projectId and d.documentName='Flowchart'")
	ProjectDocument getFlowchart(@Param("projectId") String projectId);
	
	@Transactional
	@Query("select d from ProjectDocument d where d.projectId=:projectId and d.documentName!='Flowchart'")
	List<ProjectDocument> getProjectDocuments(@Param("projectId") String projectId);
	
}

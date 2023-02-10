package com.axisbank.generaldocument.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.axisbank.generaldocument.entity.GeneralDocument;

@Repository
public interface GeneralDocumentRepository extends JpaRepository<GeneralDocument, String> {

	@Transactional
	@Query("select gd from GeneralDocument gd where gd.documentType=:documentType")
	List<GeneralDocument> getGeneralDocumentsByDocumentType(String documentType);
	
}

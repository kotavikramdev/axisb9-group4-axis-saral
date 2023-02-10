package com.axisbank.stakeholder.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.axisbank.stakeholder.entity.Stakeholder;

@Repository
public interface StakeholderRepository extends CrudRepository<Stakeholder, String> {

	@Transactional
	@Query("select s from Stakeholder s where s.projectId=:projectId")
	List<Stakeholder> getStakeholdersByProjectId(@Param("projectId") String projectId);
	
}

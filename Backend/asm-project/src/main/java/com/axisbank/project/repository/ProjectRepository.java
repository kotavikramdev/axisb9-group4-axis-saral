package com.axisbank.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.axisbank.project.entity.Project;

@Repository
public interface ProjectRepository extends CrudRepository<Project, String> {

	@Transactional
	@Query("select p from Project p where p.projectId!=:projectId")
	List<Project> getOtherProjects(@Param("projectId") String projectId);
	
}

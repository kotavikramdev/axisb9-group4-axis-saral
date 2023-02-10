package com.axisbank.admin.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.axisbank.admin.entity.Admin;

@Repository
public interface AdminRepository extends CrudRepository<Admin, String> {

}

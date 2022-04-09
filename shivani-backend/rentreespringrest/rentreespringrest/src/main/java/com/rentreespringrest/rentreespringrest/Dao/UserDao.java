package com.rentreespringrest.rentreespringrest.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rentreespringrest.rentreespringrest.entities.User;



public interface UserDao extends JpaRepository<User, Long> {
	
	
	
}

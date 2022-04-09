package com.rentreespringrest.rentreespringrest.Services;

import java.util.List;

import com.rentreespringrest.rentreespringrest.entities.User;

public interface UserService {

	public List<User> getUsers();

	public User getUser(long courseId);

	public User addUser(User user);

	public User updateUser(User user);

	public void deleteUser(long parseLong);
}

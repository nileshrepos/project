package com.rentreespringrest.rentreespringrest.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rentreespringrest.rentreespringrest.Dao.UserDao;
import com.rentreespringrest.rentreespringrest.entities.User;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;
	
	@Override
	public List<User> getUsers() {
		// TODO Auto-generated method stub
		return userDao.findAll();
	}

	@Override
	public User getUser(long courseId) {
		// TODO Auto-generated method stub
		return userDao.getOne(courseId);
	}

	@Override
	public User addUser(User user) {
		// TODO Auto-generated method stub
	    userDao.save(user);
		return user;
	}

	@Override
	public User updateUser(User user) {
		// TODO Auto-generated method stub
		userDao.save(user);
		return user;
	}

	@Override
	public void deleteUser(long parseLong) {
		// TODO Auto-generated method stub
		User entity = userDao.getOne(parseLong);
		userDao.delete(entity);
	}

}

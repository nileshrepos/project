package com.rentreespringrest.rentreespringrest.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String firstname;
	private String lastname;
	private String email;
	private Long contactnumber;
	private String address;
	private String password;
	
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	
	public User(long id, String firstname, String lastname, String email, Long contactnumber, String address,
			String password) {
		super();
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.contactnumber = contactnumber;
		this.address = address;
		this.password = password;
	}



	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Long getContactnumber() {
		return contactnumber;
	}

	public void setContactnumber(Long contactnumber) {
		this.contactnumber = contactnumber;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", email=" + email
				+ ", contactnumber=" + contactnumber + ", address=" + address + ", password=" + password + "]";
	}

	
	
	
}

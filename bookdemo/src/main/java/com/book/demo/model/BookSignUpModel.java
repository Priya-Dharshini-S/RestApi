package com.book.demo.model;
	import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

	@Entity
	@Table(name="BookSignUp")
	public class BookSignUpModel 
	{
		@Id
		@GeneratedValue(strategy=GenerationType.AUTO)
		private int id;
		@Override
		public String toString() {
			return "BookSignUpModel [id=" + id + ", username=" + username + ", password=" + password + ", email=" + email
					+ " , gender=" + gender + ", age=" + age + "]";
		}
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getUsername() {
			return username;
		}
		public void setUsername(String username) {
			this.username = username;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		private String username;
		private String password;
	
		private String email;
		private String gender;
		public String getGender() {
			return gender;
		}
		public void setGender(String gender) {
			this.gender = gender;
		}
		public int getAge() {
			return age;
		}
		public void setAge(int age) {
			this.age = age;
		}
		private int age;
		
		
	}
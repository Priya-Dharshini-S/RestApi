
package com.book.demo.Controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import com.book.demo.Service.BookSignUpService;

import com.book.demo.model.BookSignUpModel;

@RestController
@RequestMapping("/user")
public class BookSignUpController {
	
	@Autowired
	private BookSignUpService bs;
	
	@PostMapping("/signup")
	public String signup(@RequestBody Map<String,String>signupData)
	{
		String email=signupData.get("email");
		String password=signupData.get("password");
		String result=bs.checkSignUp(email,password);
		return result;
	}
	
	@PostMapping("/signuser")
	public BookSignUpModel AddUser(@RequestBody BookSignUpModel cl)
	{
		return bs.addUser(cl);
	}
	
	@GetMapping("/showall/signup")
	public List<BookSignUpModel> listAll()
	{
		return bs.getUser();
	}
}

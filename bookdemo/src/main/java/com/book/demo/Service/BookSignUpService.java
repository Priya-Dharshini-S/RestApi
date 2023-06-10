package com.book.demo.Service;
import com.book.demo.Repository.BookSignUpRepository;
import com.book.demo.model.*;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class BookSignUpService {

@Autowired
private BookSignUpRepository bsrepo;
public String checkSignUp(String email,String psword)
{
	BookSignUpModel user= bsrepo.findByUsername(email);
	if(user==null)
	{
		return "No user found";
	}
	else
	{
		if(user.getPassword().equals(psword))
		{
			return "SignUp Succesfull";
		}
		else
		{
			return "SignUp Failed";
		}
	}
} 
public BookSignUpModel addUser(BookSignUpModel obj)
{
	return bsrepo.save(obj);
}
public List<BookSignUpModel> getUser()
{
	return bsrepo.findAll();
}

}

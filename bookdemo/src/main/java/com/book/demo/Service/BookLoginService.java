package com.book.demo.Service;
import com.book.demo.model.*;
import com.book.demo.Repository.BookLoginRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class BookLoginService {

@Autowired
private BookLoginRepository brepo;
public boolean checkLogin(String username,String psword)
{
	BookLoginModel user= brepo.findByUsername(username);
	System.out.print(user);
	if(user==null)
	{
		return false;
	}
	else
	{
		if(user.getPassword().equals(psword))
		{
			return true;
		}
		else
		{
			return false;
		}
	}
} 
public BookLoginModel addUser(BookLoginModel cl)
{
	return brepo.save(cl);
}
public List<BookLoginModel> getUser()
{
	return brepo.findAll();
}

}

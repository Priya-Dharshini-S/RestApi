package com.book.demo.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.book.demo.model.BookSignUpModel;
@Repository
public interface BookSignUpRepository extends JpaRepository<BookSignUpModel, Integer>  {

	
	BookSignUpModel findByUsername(String username);
}

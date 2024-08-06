package com.sl.app;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicineRepositry extends JpaRepository<Medicine, Integer>{
	

}

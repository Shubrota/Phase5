package com.sl.app;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/students")
public class MedicineRestController {

	@Autowired
	MedicineRepositry medicineRepositry;

	@GetMapping("/all")
	public List<Medicine> listAllMedicine() {

		List<Medicine> medicine = medicineRepositry.findAll();

		return medicine;
	}

	// Challenge : Fetch details of a single student
	@GetMapping("/medicine/{id}")
	public Medicine getMedicine(@PathVariable int id) {

		Optional<Medicine> medicineFromRepo = medicineRepositry.findById(id);

		if (medicineFromRepo.isPresent()) {
			Medicine medicine = medicineFromRepo.get();
			return medicine;
		}

		return null;
	}
	
	// Add a student
	@PostMapping("/add")
	public Medicine addMedicine(@RequestBody Medicine medicine) {
		medicine = medicineRepositry.save(medicine);
		
		return medicine;
	}

}

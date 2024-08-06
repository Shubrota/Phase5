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
public class OrderRestController {

	@Autowired
	OrderRepositry orderRepositry;

	@GetMapping("/all")
	public List<Order> listAllOrder() {

		List<Order> order = orderRepositry.findAll();

		return order;
	}

	// Challenge : Fetch details of a single student
	@GetMapping("/order/{id}")
	public Order getOrder(@PathVariable int id) {

		Optional<Order> orderFromRepo = orderRepositry.findById(id);

		if (orderFromRepo.isPresent()) {
			Order order = orderFromRepo.get();
			return order;
		}

		return null;
	}
	
	// Add a student
	@PostMapping("/add")
	public Order addOrder(@RequestBody Order order) {
		order = orderRepositry.save(order);
		
		return order;
	}

}

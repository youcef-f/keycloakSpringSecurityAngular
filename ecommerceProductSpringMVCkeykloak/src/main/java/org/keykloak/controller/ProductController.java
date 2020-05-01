package org.keykloak.controller;


import org.keykloak.domain.dao.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;


// frontEnd to Backend

@Controller
public class ProductController {

	@Autowired
	private IProductRepository productRepository;
	
	@GetMapping("/")
	public String index() {
		return "index";
	}

	@GetMapping("/products")
	public String index(Model model) {
		model.addAttribute("ModelProducts", productRepository.findAll());
		return "products";
	}
	
	
}

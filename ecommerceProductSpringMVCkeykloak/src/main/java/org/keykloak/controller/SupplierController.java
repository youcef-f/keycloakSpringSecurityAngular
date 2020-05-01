package org.keykloak.controller;

import org.keycloak.adapters.springsecurity.client.KeycloakRestTemplate;
import org.keykloak.domain.Supplier;
import org.keykloak.domain.dao.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.hateoas.PagedModel;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

// Backend to Backend 
@Controller
public class SupplierController {

	@Autowired
	private KeycloakRestTemplate keycloakRestTemplate;

	@GetMapping("/suppliers")
	public String suppliers(Model model) {

		// le jwt est recuperer automatiquement et inseré dans la requete par
		// keycloakRestTemplate
		ResponseEntity<PagedModel<Supplier>> response = keycloakRestTemplate //
				.exchange("http://localhost:8083/suppliers", //
						HttpMethod.GET, //
						null, //
						new ParameterizedTypeReference<PagedModel<Supplier>>() {
						});

		model.addAttribute("ModelSuppliers", response.getBody().getContent());

		return "suppliers";
	}
	
	@ExceptionHandler(value = Exception.class)
	public String exceptionHandler() {
		return "error";
		
	}

}

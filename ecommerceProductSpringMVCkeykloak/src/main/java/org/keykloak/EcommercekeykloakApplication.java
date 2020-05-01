package org.keykloak;

import org.keykloak.domain.Product;
import org.keykloak.domain.dao.IProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class EcommercekeykloakApplication {

	public static void main(String[] args) {
		SpringApplication.run(EcommercekeykloakApplication.class, args);
	}

	@Bean
	CommandLineRunner start(IProductRepository productRepository) {

		return args -> {
			productRepository.save(new Product(null, "Ord hp", 8000));
			productRepository.save(new Product(null, "Imprimante", 3500));
			productRepository.save(new Product(null, "Smart phone Sumsung S10", 7000));

			
			productRepository.findAll().forEach(product -> {
				System.out.println(product.getName());

			});
		};

	}

}

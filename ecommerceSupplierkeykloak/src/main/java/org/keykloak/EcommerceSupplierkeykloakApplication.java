package org.keykloak;

import java.util.stream.Stream;

import org.keykloak.dao.ISupplierRepository;
import org.keykloak.domain.Supplier;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

@SpringBootApplication
public class EcommerceSupplierkeykloakApplication {

	public static void main(String[] args) {
		SpringApplication.run(EcommerceSupplierkeykloakApplication.class, args);
	}

	@Bean
	CommandLineRunner start(ISupplierRepository supplierRepository,RepositoryRestConfiguration repositoryRestConfiguration) {
		
		repositoryRestConfiguration.exposeIdsFor(Supplier.class) ; 
		return args -> {
			Stream.of("IBM","HP","Sumsung").forEach(name -> {
				
				supplierRepository.save(new Supplier(null, name, "contact@"+name+".com"));
			});
		};
	}
}

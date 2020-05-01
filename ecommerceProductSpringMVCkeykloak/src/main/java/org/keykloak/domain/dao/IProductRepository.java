package org.keykloak.domain.dao;

import org.keykloak.domain.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IProductRepository extends JpaRepository<Product, Long> {

	
}

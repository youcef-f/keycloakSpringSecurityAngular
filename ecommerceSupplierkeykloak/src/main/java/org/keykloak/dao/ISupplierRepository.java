package org.keykloak.dao;

import org.keykloak.domain.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

// @CrossOrigin("*")
@RepositoryRestResource
public interface ISupplierRepository extends JpaRepository<Supplier, Long> {

}

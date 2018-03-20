package com.example.salesapi.repositories;

import com.example.salesapi.models.Sales;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface SalesRepository extends CrudRepository<Sales, Long> {
    List<Sales> getByRegion(String region);
}
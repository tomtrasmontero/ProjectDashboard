package com.example.salesapi.controllers;

import com.example.salesapi.models.Sales;
import com.example.salesapi.repositories.SalesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SalesController {

    @Autowired
    private SalesRepository salesRepository;

    @GetMapping("/sales")
    public Iterable<Sales> findAllSales() {
        return salesRepository.findAll();
    }

    @DeleteMapping("/sales/{salesId}")
    public HttpStatus deleteById(@PathVariable Long salesId) {
        salesRepository.delete(salesId);
        return HttpStatus.OK;
    }

    @PostMapping("/sales")
    public Sales createNewSaleTrx(@RequestBody Sales newSaleTrx) {
        return salesRepository.save(newSaleTrx);
    }

    @GetMapping("/sales/region/{name}")
    public List<Sales> getByRegion(@PathVariable String name ) {
        return salesRepository.getByRegion(name);
    }
}
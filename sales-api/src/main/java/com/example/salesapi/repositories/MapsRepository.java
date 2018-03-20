package com.example.salesapi.repositories;

import com.example.salesapi.models.Maps;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface MapsRepository extends CrudRepository<Maps,Long > {
    List<Maps> getByRegion(String region);


}
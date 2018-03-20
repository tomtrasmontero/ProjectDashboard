package com.example.salesapi.controllers;

import com.example.salesapi.models.Maps;
import com.example.salesapi.repositories.MapsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MapController {

    @Autowired
    private MapsRepository mapsRepository;

    @GetMapping("/maps")
    public Iterable<Maps> findAllMaps() {
        return mapsRepository.findAll();
    }

    @GetMapping("/region/{regionName}")
    public List<Maps> findMapsByRegion(@PathVariable String regionName) {
        return mapsRepository.getByRegion(regionName);
    }



}
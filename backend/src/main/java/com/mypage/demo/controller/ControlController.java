package com.mypage.demo.controller;

import com.mypage.demo.model.Product;
import com.mypage.demo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ControlController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/api/products")
    public List<Product> getProducts() {
        return productRepository.findAll();
    }


    // You can add more endpoints for Users and Orders here
}

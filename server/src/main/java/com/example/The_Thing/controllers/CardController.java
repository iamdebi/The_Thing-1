package com.example.The_Thing.controllers;

import com.example.The_Thing.models.Card;
import com.example.The_Thing.repositories.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CardController {

    @Autowired
    private CardRepository cardRepository;

    @GetMapping(value = "/cards")
    ResponseEntity<List<Card>> findAllCards() {
        return new ResponseEntity<>(cardRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/cards/{id}")
    ResponseEntity findCard(@PathVariable Long id) {
        return new ResponseEntity<>(cardRepository.findById(id), HttpStatus.OK);
    }

}
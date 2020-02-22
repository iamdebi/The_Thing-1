package com.example.The_Thing.controllers;

import com.example.The_Thing.models.Player;
import com.example.The_Thing.repositories.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PlayerController {

    @Autowired
    private PlayerRepository playersRepository;

    @GetMapping(value = "/players")
    ResponseEntity<List<Player>> findAllPlayers() {
        return new ResponseEntity<>(playersRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/players/{id}")
    ResponseEntity findPlayer(@PathVariable Long id) {
        return new ResponseEntity<>(playersRepository.findById(id), HttpStatus.OK);
    }


}

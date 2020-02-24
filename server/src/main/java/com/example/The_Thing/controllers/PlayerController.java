package com.example.The_Thing.controllers;

import com.example.The_Thing.models.Player;
import com.example.The_Thing.repositories.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
public class PlayerController {

    @Autowired
    private PlayerRepository playerRepository;

    // Get all players

    @GetMapping(value = "/players")
    ResponseEntity<List<Player>> findAllPlayers() {
        return new ResponseEntity<>(playerRepository.findAll(), HttpStatus.OK);
    }

    // Get a specific player by id

    @GetMapping(value = "/players/{id}")
    ResponseEntity findPlayer(@PathVariable Long id) {
        return new ResponseEntity<>(playerRepository.findById(id), HttpStatus.OK);
    }

    // Post a new player

    @PostMapping(value = "/players")
    public ResponseEntity<Player> postPlayer(@RequestBody Player player) {
        playerRepository.save(player);
        return new ResponseEntity<>(player, HttpStatus.CREATED);
    }

    // Update a specific player by id

    @PatchMapping(value = "/players/{id}")
    public ResponseEntity<Player> updatePlayer(@RequestBody Player player, @PathVariable Long id) {
        playerRepository.save(player);
        return new ResponseEntity<>(player, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/players")
    void deleteAllPlayers() {
        playerRepository.deleteAll();
    }


}

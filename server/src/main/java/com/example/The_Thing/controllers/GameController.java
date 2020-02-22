package com.example.The_Thing.controllers;

import com.example.The_Thing.models.Game;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class GameController {

    @Autowired
    GameRepository gameRepository;

    @GetMapping(value = "/games")
    ResponseEntity<List<Game>> findAllGames() {
        return new ResponseEntity<>(gameRepository.findAll(), HttpStatus.OK);
    }

    // Get a specific game by id

    @GetMapping(value = "/game/{id}")
    ResponseEntity findGame(@PathVariable Long id) {
        return new ResponseEntity<>(gameRepository.findById(id), HttpStatus.OK);
    }

    // Post a new game

    @PostMapping(value = "/games")
    public ResponseEntity<Game> postGame(@RequestBody Game game) {
        gameRepository.save(game);
        return new ResponseEntity<>(game, HttpStatus.CREATED);
    }

    // Update a specific game by id

    @PatchMapping(value = "/game/{id}")
    public ResponseEntity<Game> updateGame(@RequestBody Game game, @PathVariable Long id) {
        gameRepository.save(game);
        return new ResponseEntity<>(game, HttpStatus.CREATED);
    }

}

package com.example.The_Thing.controllers;

import com.example.The_Thing.models.ImitationBlocked;
import com.example.The_Thing.models.ImitationPassed;
import com.example.The_Thing.models.Player;
import com.example.The_Thing.repositories.ImitationBlockedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ImitationBlockController {

        @Autowired
        ImitationBlockedRepository imitationBlockRepository;

        @GetMapping(value = "/imitation-blocks")
            ResponseEntity<List<ImitationBlocked>> findAllImitationBlocks() {
        return new ResponseEntity<>(imitationBlockRepository.findAll(), HttpStatus.OK);
        }

    @PostMapping(value = "/imitation-blocks")
    public ResponseEntity<ImitationBlocked> postPlayer(@RequestBody ImitationBlocked imitationBlocked) {
        imitationBlockRepository.save(imitationBlocked);
        return new ResponseEntity<>(imitationBlocked, HttpStatus.CREATED);
    }

        @DeleteMapping(value = "/imitation-blocks")
        void deleteAllImitationBlocks() {
            imitationBlockRepository.deleteAll();
        }

}

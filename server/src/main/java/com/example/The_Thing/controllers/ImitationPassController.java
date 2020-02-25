package com.example.The_Thing.controllers;

import com.example.The_Thing.models.ImitationPassed;
import com.example.The_Thing.repositories.ImitationPassedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class ImitationPassController {

    @Autowired
    ImitationPassedRepository imitationPassRepository;

    @PatchMapping(value = "/imitation-pass/{id}")
    ResponseEntity<ImitationPassed> updateImitationPass(@RequestBody ImitationPassed imitationPass, @PathVariable Long id) {
        imitationPassRepository.save(imitationPass);
        return new ResponseEntity<ImitationPassed>(imitationPass, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/imitation-passes")
    void deleteAllImitationPasses() {
        imitationPassRepository.deleteAll();
    }

}


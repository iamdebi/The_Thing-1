package com.example.The_Thing.repositories;

import com.example.The_Thing.models.Card;
import com.example.The_Thing.models.ImitationPassed;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImitationPassedRepository extends JpaRepository<ImitationPassed, Long> {
}

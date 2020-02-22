package com.example.The_Thing.repositories;
import com.example.The_Thing.models.Game;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameRepository extends JpaRepository<Game, Long> {
}

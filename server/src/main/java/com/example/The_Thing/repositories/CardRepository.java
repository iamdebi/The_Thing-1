package com.example.The_Thing.repositories;

import com.example.The_Thing.models.Card;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface CardRepository extends JpaRepository <Card, Long> {

}

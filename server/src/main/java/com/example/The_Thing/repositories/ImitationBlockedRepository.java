package com.example.The_Thing.repositories;

import com.example.The_Thing.models.Card;
import com.example.The_Thing.models.ImitationBlocked;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImitationBlockedRepository extends JpaRepository<ImitationBlocked, Long> {
}

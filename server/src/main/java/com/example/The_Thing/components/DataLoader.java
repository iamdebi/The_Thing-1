package com.example.The_Thing.components;

import com.example.The_Thing.models.Card;
import com.example.The_Thing.models.Game;
import com.example.The_Thing.models.Player;
import com.example.The_Thing.repositories.CardRepository;
import com.example.The_Thing.repositories.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    private CardRepository cardRepository;

    @Autowired
    private PlayerRepository playerRepository;

    public DataLoader() {
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {

        Card imitationBlocked = new Card("blocked");
        cardRepository.save(imitationBlocked);

        Card imitationBlocked1 = new Card("blocked");
        cardRepository.save(imitationBlocked1);

        Card imitationBlocked2 = new Card("blocked");
        cardRepository.save(imitationBlocked2);

        Card imitationBlocked3 = new Card("blocked");
        cardRepository.save(imitationBlocked3);

        Card imitationBlocked4 = new Card("blocked");
        cardRepository.save(imitationBlocked4);

        Card imitationBlocked5 = new Card("blocked");
        cardRepository.save(imitationBlocked5);

        Card imitationPassed = new Card("passed");
        cardRepository.save(imitationPassed);

        Card imitationPassed1 = new Card("passed");
        cardRepository.save(imitationPassed1);

        Card imitationPassed2 = new Card("passed");
        cardRepository.save(imitationPassed2);

        Card imitationPassed3 = new Card("passed");
        cardRepository.save(imitationPassed3);

        Card imitationPassed4 = new Card("passed");
        cardRepository.save(imitationPassed4);

        Card imitationPassed5 = new Card("passed");
        cardRepository.save(imitationPassed5);

        Card imitationPassed6 = new Card("passed");
        cardRepository.save(imitationPassed6);

        Card imitationPassed7 = new Card("passed");
        cardRepository.save(imitationPassed7);

        Card imitationPassed8 = new Card("passed");
        cardRepository.save(imitationPassed8);

        Card imitationPassed9 = new Card("passed");
        cardRepository.save(imitationPassed9);

        Card imitationPassed10 = new Card("passed");
        cardRepository.save(imitationPassed10);
    }



}

package com.example.The_Thing.components;

import com.example.The_Thing.models.Card;
import com.example.The_Thing.repositories.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    private CardRepository cardRepository;

    public DataLoader() {
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {

        Card imitationBlocked = new Card("blocked");
        cardRepository.save(imitationBlocked);

        Card imitationPassed = new Card("passed");
        cardRepository.save(imitationPassed);

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

        List<Card> cardDeck = new ArrayList<>();
        cardDeck.add(imitationBlocked);
        cardDeck.add(imitationPassed);
        cardDeck.add(imitationPassed2);
        cardDeck.add(imitationPassed3);
        cardDeck.add(imitationPassed4);
        cardDeck.add(imitationPassed5);
        cardDeck.add(imitationPassed6);
    }
    
}

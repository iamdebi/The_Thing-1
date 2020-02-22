package com.example.The_Thing.components;

import com.example.The_Thing.models.Card;
import com.example.The_Thing.models.Game;
import com.example.The_Thing.models.Player;
import com.example.The_Thing.repositories.CardRepository;
import com.example.The_Thing.repositories.GameRepository;
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

    @Autowired
    private GameRepository gameRepository;

    public DataLoader() {
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {


        Game game = new Game();
        gameRepository.save(game);

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

        Player player1 = new Player("Paul");
        playerRepository.save(player1);

        Player player2 = new Player("Brendan");
        playerRepository.save(player2);

        Player player3 = new Player("Becky");
        playerRepository.save(player3);

        Player player4 = new Player("Debbie");
        playerRepository.save(player4);

        Player player5 = new Player("Michael");
        playerRepository.save(player5);

        game.addPlayerToGame(player1);
        game.addCardToGame(imitationPassed2);
        gameRepository.save(game);

    }



}

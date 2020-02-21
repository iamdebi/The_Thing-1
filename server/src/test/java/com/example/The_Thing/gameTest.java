package com.example.The_Thing;

import com.example.The_Thing.models.Card;
import com.example.The_Thing.models.Game;
import com.example.The_Thing.models.Player;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class gameTest {

    Game game;
    Card card1;
    Card card2;
    Card card3;
    Player player1;
    Player player2;
    Player player3;
    Player player4;
    Player player5;
    Player player6;


    @Test
    void contextLoads() {
    }

    @Test
    void canShufflePlayer(){
        //        randomises so may fail sometimes, ensures the first player1 isn't always first player in array
        game = new Game();
        player1 = new Player("player1");
        player2 = new Player("player2");
        player3 = new Player("player3");
        player4 = new Player("player4");

        game.addPlayerToGame(player1);
        game.addPlayerToGame(player2);
        game.addPlayerToGame(player3);
        game.addPlayerToGame(player4);

        game.randomise(game.getPlayers());
        assertEquals(4, game.playerCount());
        assertEquals(player1, game.getFirstPlayer());
    }


    @Test
    void canShuffleCard(){
//        randomises so may fail sometimes, ensures the first card1 isn't always first card in array
        game = new Game();
        card1 = new Card("imitationBlocked");
        card3 = new Card("imitationBlocked");
        card2 = new Card("imitationPassed");

        game.addCardToGame(card1);
        game.addCardToGame(card2);
        game.addCardToGame(card3);

        game.randomise(game.getCardDeck());
        assertEquals(3, game.cardCount());
        assertEquals(card1, game.getFirstCard());
    }

    @Test
    void canPopulateAliens(){
        game = new Game();
        player1 = new Player("player1");
        player2 = new Player("player2");
        player3 = new Player("player3");
        player4 = new Player("player4");
        player5 = new Player("player5");
        player6 = new Player("player6");

        game.addPlayerToGame(player1);
        game.addPlayerToGame(player2);
        game.addPlayerToGame(player3);
        game.addPlayerToGame(player4);
        game.addPlayerToGame(player5);
        game.addPlayerToGame(player6);

        game.populateAliens();

        assertEquals(6, game.playerCount());
        assertEquals(2, game.alienCount());

    }

}
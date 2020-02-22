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
    Player player7;
    Player player8;
    Player player9;
    Player player10;


    @Test
    void contextLoads() {
    }

    //Comment these out before testing.
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



    //Team tests from 5-10 players
    @Test
    void canAssignPlayersToTeams5Players(){
        game = new Game();
        player1 = new Player("player1");
        player2 = new Player("player2");
        player3 = new Player("player3");
        player4 = new Player("player4");
        player5 = new Player("player5");

        game.addPlayerToGame(player1);
        game.addPlayerToGame(player2);
        game.addPlayerToGame(player3);
        game.addPlayerToGame(player4);
        game.addPlayerToGame(player5);

        game.populateTeams();

        assertEquals(5, game.playerCount());
        assertEquals(2, game.alienCount());
        assertEquals(3, game.humanCount());
    }

    @Test
    void canAssignPlayersToTeams6Players(){
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

        game.populateTeams();

        assertEquals(6, game.playerCount());
        assertEquals(2, game.alienCount());
        assertEquals(4, game.humanCount());
    }

    @Test
    void canAssignPlayersToTeams7Players(){
        game = new Game();
        player1 = new Player("player1");
        player2 = new Player("player2");
        player3 = new Player("player3");
        player4 = new Player("player4");
        player5 = new Player("player5");
        player6 = new Player("player6");
        player7 = new Player("player7");

        game.addPlayerToGame(player1);
        game.addPlayerToGame(player2);
        game.addPlayerToGame(player3);
        game.addPlayerToGame(player4);
        game.addPlayerToGame(player5);
        game.addPlayerToGame(player6);
        game.addPlayerToGame(player7);

        game.populateTeams();

        assertEquals(7, game.playerCount());
        assertEquals(3, game.alienCount());
        assertEquals(4, game.humanCount());
    }

    @Test
    void canAssignPlayersToTeams8Players(){
        game = new Game();
        player1 = new Player("player1");
        player2 = new Player("player2");
        player3 = new Player("player3");
        player4 = new Player("player4");
        player5 = new Player("player5");
        player6 = new Player("player6");
        player7 = new Player("player7");
        player8 = new Player("player8");

        game.addPlayerToGame(player1);
        game.addPlayerToGame(player2);
        game.addPlayerToGame(player3);
        game.addPlayerToGame(player4);
        game.addPlayerToGame(player5);
        game.addPlayerToGame(player6);
        game.addPlayerToGame(player7);
        game.addPlayerToGame(player8);

        game.populateTeams();

        assertEquals(8, game.playerCount());
        assertEquals(3, game.alienCount());
        assertEquals(5, game.humanCount());
    }

    @Test
    void canAssignPlayersToTeams9Players(){
        game = new Game();
        player1 = new Player("player1");
        player2 = new Player("player2");
        player3 = new Player("player3");
        player4 = new Player("player4");
        player5 = new Player("player5");
        player6 = new Player("player6");
        player7 = new Player("player7");
        player8 = new Player("player8");
        player9 = new Player("player9");

        game.addPlayerToGame(player1);
        game.addPlayerToGame(player2);
        game.addPlayerToGame(player3);
        game.addPlayerToGame(player4);
        game.addPlayerToGame(player5);
        game.addPlayerToGame(player6);
        game.addPlayerToGame(player7);
        game.addPlayerToGame(player8);
        game.addPlayerToGame(player9);

        game.populateTeams();

        assertEquals(9, game.playerCount());
        assertEquals(4, game.alienCount());
        assertEquals(5, game.humanCount());
    }

    @Test
    void canAssignPlayersToTeams10Players(){
        game = new Game();
        player1 = new Player("player1");
        player2 = new Player("player2");
        player3 = new Player("player3");
        player4 = new Player("player4");
        player5 = new Player("player5");
        player6 = new Player("player6");
        player7 = new Player("player7");
        player8 = new Player("player8");
        player9 = new Player("player9");
        player9 = new Player("player10");

        game.addPlayerToGame(player1);
        game.addPlayerToGame(player2);
        game.addPlayerToGame(player3);
        game.addPlayerToGame(player4);
        game.addPlayerToGame(player5);
        game.addPlayerToGame(player6);
        game.addPlayerToGame(player7);
        game.addPlayerToGame(player8);
        game.addPlayerToGame(player9);
        game.addPlayerToGame(player10);

        game.populateTeams();

        assertEquals(10, game.playerCount());
        assertEquals(4, game.alienCount());
        assertEquals(6, game.humanCount());
    }
}
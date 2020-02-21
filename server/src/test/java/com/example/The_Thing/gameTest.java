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
    ArrayList<Player> players;

    @Test
    void contextLoads() {
    }

    @Test
    void canShuffleGame(){
        game = new Game();
        card1 = new Card("imitationBlocked");
        card3 = new Card("imitationBlocked");
        card2 = new Card("imitationPassed");
        player1 = new Player("player1");
        player2 = new Player("player2");
        player3 = new Player("player3");
        player4 = new Player("player4");

        game.addPlayerToGame(player1);
        game.addPlayerToGame(player2);
        game.addPlayerToGame(player3);
        game.addPlayerToGame(player4);


        game.randomise(players);
        assertEquals(4, game.playerCount());
        assertEquals(player1, game.getFirstPlayer());
    }

}
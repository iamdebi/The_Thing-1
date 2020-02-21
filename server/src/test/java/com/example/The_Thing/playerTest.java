package com.example.The_Thing;

import com.example.The_Thing.models.Card;
import com.example.The_Thing.models.Game;
import com.example.The_Thing.models.Player;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class playerTest {

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
    public void canAddPlayersToArrayList(){
        player1 = new Player("Paul");
        player2 = new Player("Brendan");
        player3 = new Player("Debbie");
        player3 = new Player("Grant");
        players = new ArrayList<Player>();
        players.add(player1);
        players.add(player2);
        players.add(player3);
        players.add(player4);
        assertEquals(4, players.size());
    }

    @Test
    public void canGetSetPlayerName(){
        player1 = new Player ("Tony");
        player1.setName("Paul");
        assertEquals("Paul", player1.getName());
    }

    @Test
    public void canAssignRole(){
        player1 = new Player("Paul");
        player2 = new Player("Brendan");
        player3 = new Player("Debbie");
        player1.setRole("The Thing");
        player2.setRole("Imitation");
        player3.setRole("Human");
        assertEquals("The Thing", player1.getRole());
        assertEquals("Imitation", player2.getRole());
        assertEquals("Human", player3.getRole());
    }

    @Test
    public void canAssignParty(){
        player1 = new Player("Paul");
        player2 = new Player("Brendan");
        player3 = new Player("Debbie");
        player1.setParty("Human");
        player2.setParty("Alien");
        player3.setParty("Alien");
        assertEquals("Human", player1.getParty());
        assertEquals("Alien", player2.getParty());
    }

    @Test
    public void canSetCaptainCoCaptain(){
        player1 = new Player("Paul");
        player2 = new Player("Brendan");
        player1.setCaptain(true);
        player2.setCoCaptain(true);
        assertEquals(true, player1.getCaptain());
        assertEquals(true, player2.getCoCaptain());
    }

    @Test
    public void canSetGetVote(){
        player1 = new Player("Paul");
        player2 = new Player("Brendan");
        player3 = new Player("Debbie");
        player1.setVote("Yes");
        player2.setVote("No");
        player3.setVote("Yes");
        assertEquals("Yes", player1.getVote());
        assertEquals("No", player2.getVote());
        assertEquals("Yes", player3.getVote());
    }
}

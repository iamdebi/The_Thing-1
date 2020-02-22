package com.example.The_Thing.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Entity
@Table
public class Game {

    @Column(name ="players")
    private List<Player> players;

    @Column(name ="alines")
    private List<Player> aliens;

    @Column(name ="humans")
    private List<Player> humans;

    @Column(name ="cardDeck")
    private List<Card> cardDeck;

    @Column(name ="cardsInPlay")
    private List<Card> cardsInPlay;

    @Column
    private List<Card> imitationPassBoard;

    @Column
    private List<Card> imitationBlockBoard;

    @Column
    private List<String> votes;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Game() {
        this.players = new ArrayList<>();
        this.aliens = new ArrayList<>();
        this.humans = new ArrayList<>();
        this.cardDeck = new ArrayList<>();
        this.cardsInPlay = new ArrayList<>();
        this.imitationPassBoard = new ArrayList<>();
        this.imitationBlockBoard = new ArrayList<>();
        this.votes = new ArrayList<>();
    }

    public List<Player> getPlayers() {
        return this.players;
    }

    public void setPlayers(ArrayList<Player> players) {
        this.players = players;
    }

    public List<Player> getAliens() {
        return this.aliens;
    }

    public void setAliens(ArrayList<Player> aliens) {
        this.aliens = aliens;
    }

    public List<Player> getHumans() {
        return this.humans;
    }

    public void setHumans(ArrayList<Player> humans) {
        this.humans = humans;
    }

    public List<Card> getCardDeck() {
        return this.cardDeck;
    }

    public void setCardDeck(ArrayList<Card> cardDeck) {
        this.cardDeck = cardDeck;
    }

    public List<Card> getCardsInPlay() {
        return this.cardsInPlay;
    }

    public void setCardsInPlay(ArrayList<Card> cardsInPlay) {
        this.cardsInPlay = cardsInPlay;
    }

    public List<Card> getImitationPassBoard() {
        return this.imitationPassBoard;
    }

    public void setImitationPassBoard(ArrayList<Card> imitationPassBoard) {
        this.imitationPassBoard = imitationPassBoard;
    }

    public List<Card> getImitationBlockBoard() {
        return this.imitationBlockBoard;
    }

    public void setImitationBlockBoard(ArrayList<Card> imitationBlockBoard) {
        this.imitationBlockBoard = imitationBlockBoard;
    }

    public List<String> getVotes() {
        return this.votes;
    }

    public void setVotes(ArrayList<String> votes) {
        this.votes = votes;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public  void addPlayerToGame(Player player){
        this.players.add(player);
    }

    public void removePlayerFromGame(Player player){
        this.players.remove(player);
    }

    public void randomise(List arrayList){
        Collections.shuffle(arrayList);
    }

    public int playerCount() {
        return this.players.size();
    }

    public Player getFirstPlayer(){
        Player player = this.players.get(0);
        return player;
    }

    public Card getFirstCard(){
        Card card = this.cardDeck.get(0);
        return  card;
    }

    public void addCardToGame(Card card){
        this.cardDeck.add(card);
    }

    public int cardCount(){
        return this.cardDeck.size();
    }

    public int humanCount(){
        return this.humans.size();
    }

    public int alienCount(){
        return this.aliens.size();
    }

    public void populateTeams(){

        //randomise players array.
        randomise(this.players);
        // set playerCount to int variable in order pass into subList
        int playerCount = this.players.size();

        if ( (playerCount == 5) || (playerCount == 6) ){

            // subList(fromIndex, toIndex)
            // make a sublist for EACH team based on index (0 & 1 for aliens)
            ArrayList<Player> aliensSubList = new ArrayList<Player>(players.subList(0, 2));
            // (2 - playerCount)
            ArrayList<Player> humansSubList = new ArrayList<Player>(players.subList(2, playerCount));

            //for each Player in aliens subList, add to aliens ArrayList
            for (Player alien : aliensSubList) {
                this.aliens.add(alien);
            }

            //for each Player in humans subList, add to humans ArrayList
            for (Player human : humansSubList) {
                this.humans.add(human);
            }
        }
        else if ( (playerCount == 7) || (playerCount == 8) ){

            // subList(fromIndex, toIndex)
            // make a sublist for EACH team based on index (0,1 & 2 for aliens)
            ArrayList<Player> aliensSubList = new ArrayList<Player>(players.subList(0, 3));
            // (3 - playerCount)
            ArrayList<Player> humansSubList = new ArrayList<Player>(players.subList(3, playerCount));

            //for each Player in aliens subList, add to aliens ArrayList
            for (Player alien : aliensSubList) {
                this.aliens.add(alien);
            }

            //for each Player in humans subList, add to humans ArrayList
            for (Player human : humansSubList) {
                this.humans.add(human);
            }
        }
        else if( (playerCount == 9) || (playerCount == 10) ){

            // subList(fromIndex, toIndex)
            // make a sublist for EACH team based on index (0,1,2 & 3 for aliens)
            ArrayList<Player> aliensSubList = new ArrayList<Player>(players.subList(0, 4));
            // (4 - playerCount)
            ArrayList<Player> humansSubList = new ArrayList<Player>(players.subList(4, playerCount));

            //for each Player in aliens subList, add to aliens ArrayList
            for (Player alien : aliensSubList) {
                this.aliens.add(alien);
            }

            //for each Player in humans subList, add to humans ArrayList
            for (Player human : humansSubList) {
                this.humans.add(human);
            }
        }
    }

}

package com.example.The_Thing.models;

import java.util.ArrayList;
import java.util.Collections;

public class Game {

    private ArrayList<Player> players;

    private ArrayList<Player> aliens;

    private ArrayList<Player> humans;

    private ArrayList<Card> cardDeck;

    private ArrayList<Card> cardsInPlay;

    private ArrayList<Card> imitationPassBoard;

    private ArrayList<Card> imitationBlockBoard;

    private ArrayList<String> votes;

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



    public ArrayList<Player> getPlayers() {
        return players;
    }

    public void setPlayers(ArrayList<Player> players) {
        this.players = players;
    }

    public ArrayList<Player> getAliens() {
        return aliens;
    }

    public void setAliens(ArrayList<Player> aliens) {
        this.aliens = aliens;
    }

    public ArrayList<Player> getHumans() {
        return humans;
    }

    public void setHumans(ArrayList<Player> humans) {
        this.humans = humans;
    }

    public ArrayList<Card> getCardDeck() {
        return cardDeck;
    }

    public void setCardDeck(ArrayList<Card> cardDeck) {
        this.cardDeck = cardDeck;
    }

    public ArrayList<Card> getCardsInPlay() {
        return cardsInPlay;
    }

    public void setCardsInPlay(ArrayList<Card> cardsInPlay) {
        this.cardsInPlay = cardsInPlay;
    }

    public ArrayList<Card> getImitationPassBoard() {
        return imitationPassBoard;
    }

    public void setImitationPassBoard(ArrayList<Card> imitationPassBoard) {
        this.imitationPassBoard = imitationPassBoard;
    }

    public ArrayList<Card> getImitationBlockBoard() {
        return imitationBlockBoard;
    }

    public void setImitationBlockBoard(ArrayList<Card> imitationBlockBoard) {
        this.imitationBlockBoard = imitationBlockBoard;
    }

    public ArrayList<String> getVotes() {
        return votes;
    }

    public void setVotes(ArrayList<String> votes) {
        this.votes = votes;
    }

    public  void addPlayerToGame(Player player){
        this.players.add(player);
    }

    public void removePlayerFromGame(Player player){
        this.players.remove(player);
    }

    public void randomise(ArrayList arrayList){
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

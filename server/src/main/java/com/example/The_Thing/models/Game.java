package com.example.The_Thing.models;

import java.util.ArrayList;
import java.util.Collections;

public class Game {

    private ArrayList<Player> players;

    private ArrayList<Player> aliens;

    private ArrayList<Player> humans;

    private ArrayList<Card> cardDeck;

    private ArrayList<Card> cardsInPlay;

    private ArrayList<Card> imitationPass;

    private ArrayList<Card> imitationBlock;

    private ArrayList<String> votes;

    public Game() {
        this.players = new ArrayList<>();
        this.aliens = new ArrayList<>();
        this.humans = new ArrayList<>();
        this.cardDeck = new ArrayList<>();
        this.cardsInPlay = new ArrayList<>();
        this.imitationPass = new ArrayList<>();
        this.imitationBlock = new ArrayList<>();
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

    public ArrayList<Card> getImitationPass() {
        return imitationPass;
    }

    public void setImitationPass(ArrayList<Card> imitationPass) {
        this.imitationPass = imitationPass;
    }

    public ArrayList<Card> getImitationBlock() {
        return imitationBlock;
    }

    public void setImitationBlock(ArrayList<Card> imitationBlock) {
        this.imitationBlock = imitationBlock;
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




}

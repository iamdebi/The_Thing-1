package models;

import java.util.ArrayList;
import java.util.List;

public class Game {

    private List<Player> players;

    private List<Player> aliens;

    private List<Player> humans;

    private List<Card> cardDeck;

    private List<Card> cardsInPlay;

    private List<Card> imitationPass;

    private List<Card> imitationBlock;

    private List<String> votes;

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

    public List<Player> getPlayers() {
        return players;
    }

    public void setPlayers(List<Player> players) {
        this.players = players;
    }

    public List<Player> getAliens() {
        return aliens;
    }

    public void setAliens(List<Player> aliens) {
        this.aliens = aliens;
    }

    public List<Player> getHumans() {
        return humans;
    }

    public void setHumans(List<Player> humans) {
        this.humans = humans;
    }

    public List<Card> getCardDeck() {
        return cardDeck;
    }

    public void setCardDeck(List<Card> cardDeck) {
        this.cardDeck = cardDeck;
    }

    public List<Card> getCardsInPlay() {
        return cardsInPlay;
    }

    public void setCardsInPlay(List<Card> cardsInPlay) {
        this.cardsInPlay = cardsInPlay;
    }

    public List<Card> getImitationPass() {
        return imitationPass;
    }

    public void setImitationPass(List<Card> imitationPass) {
        this.imitationPass = imitationPass;
    }

    public List<Card> getImitationBlock() {
        return imitationBlock;
    }

    public void setImitationBlock(List<Card> imitationBlock) {
        this.imitationBlock = imitationBlock;
    }

    public List<String> getVotes() {
        return votes;
    }

    public void setVotes(List<String> votes) {
        this.votes = votes;
    }

}

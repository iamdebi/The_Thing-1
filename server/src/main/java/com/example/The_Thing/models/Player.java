package com.example.The_Thing.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "players")
public class Player {

    @Column(name = "name")
    private String name;

    @Column(name = "role")
    private String role;

    @Column(name = "party")
    private String party;

    @Column(name = "captain")
    private Boolean captain;

    @Column(name = "coCaptain")
    private Boolean coCaptain;

    @Column(name = "vote")
    private String vote;

    @Column(name = "cards")
    private ArrayList<Card> cards;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Player() {
    }

    public Player(String name) {
        this.name = name;
        this.role = "";
        this.party = "";
        this.captain = false;
        this.coCaptain = false;
        this.vote = "";
        this.cards = new ArrayList<>();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    String getParty() {
        return party;
    }

    void setParty(String party) {
        this.party = party;
    }

    Boolean getCaptain() {
        return captain;
    }

    void setCaptain(Boolean captain) {
        this.captain = captain;
    }

    Boolean getCoCaptain() {
        return coCaptain;
    }

    void setCoCaptain(Boolean coCaptain) {
        this.coCaptain = coCaptain;
    }

    String getVote() {
        return vote;
    }

    void setVote(String vote) {
        this.vote = vote;
    }

    Long getId() {
        return id;
    }

}

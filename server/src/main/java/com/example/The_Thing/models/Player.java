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

    public String getParty() {
        return party;
    }

    public void setParty(String party) {
        this.party = party;
    }

    public Boolean getCaptain() {
        return captain;
    }

    public void setCaptain(Boolean captain) {
        this.captain = captain;
    }

    public Boolean getCoCaptain() {
        return coCaptain;
    }

    public void setCoCaptain(Boolean coCaptain) {
        this.coCaptain = coCaptain;
    }

    public String getVote() {
        return vote;
    }

    public void setVote(String vote) {
        this.vote = vote;
    }

    public Long getId() {
        return id;
    }
}

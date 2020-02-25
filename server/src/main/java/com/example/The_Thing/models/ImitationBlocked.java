package com.example.The_Thing.models;

import javax.persistence.*;

@Entity
@Table(name = "blocked")
public class ImitationBlocked {

    @Column(name = "type")
    private String type;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public ImitationBlocked() {
    }

    public ImitationBlocked(String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Long getId() {
        return id;
    }

}

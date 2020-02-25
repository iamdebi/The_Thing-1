package com.example.The_Thing.models;

import javax.persistence.*;

@Entity
@Table(name = "passed")
public class ImitationPassed {

    @Column(name = "type")
    private String type;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public ImitationPassed() {
    }

    public ImitationPassed(String type) {
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

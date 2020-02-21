package models;

import javax.persistence.*;

@Entity
@Table(name = "cards")
public class Card {

    @Column(name = "type")
    private String type;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Card() {
    }

    public Card(String type) {
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

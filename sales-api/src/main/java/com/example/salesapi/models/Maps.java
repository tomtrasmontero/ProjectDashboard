package com.example.salesapi.models;

import lombok.*;

import javax.persistence.*;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "MAPS")
public class Maps {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "REGION")
    private String region;

    @Column(name = "STATE")
    private String state;

    @Column(name = "ABBR")
    private String abbr;

    @Column(name = "X")
    private String x;

    @Column(name = "Y")
    private String y;

    @Column(name = "VALUE")
    private String value;
}
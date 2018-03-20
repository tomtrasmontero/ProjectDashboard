package com.example.salesapi.models;

import lombok.*;

import javax.persistence.*;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "SALES")
public class Sales {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "REGION")
    private String region;

    @Column(name = "TIME")
    private String time;

    @Column(name = "LINE")
    private String line;

    @Column(name = "AREA")
    private String area;

}
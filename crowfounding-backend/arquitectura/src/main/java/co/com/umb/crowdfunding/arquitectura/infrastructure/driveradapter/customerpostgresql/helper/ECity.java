package co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.customerpostgresql.helper;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ECity {

    Bogota(1, "Bogota"),
    Medellin(2,"Medellin");


    private int id;
    private String city;
}

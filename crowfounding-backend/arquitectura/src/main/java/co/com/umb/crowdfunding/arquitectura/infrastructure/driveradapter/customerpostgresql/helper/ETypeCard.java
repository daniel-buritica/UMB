package co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.customerpostgresql.helper;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ETypeCard {
    CEDULA_CIUDADANIA(1, "CC"),
    CEDULA_EXTRANGERIA(2, "CE"),
    TARGETA_IDENTIDAD(3, "TI"),
    PASAPORTE(4, "PA");

    private int id;
    private String type;

}

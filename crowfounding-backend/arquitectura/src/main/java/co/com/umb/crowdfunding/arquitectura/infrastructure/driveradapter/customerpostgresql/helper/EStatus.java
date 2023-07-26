package co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.customerpostgresql.helper;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum EStatus {

    ACTIVO(1, true),
    INACTIVO(2,false);


    private int id;
    private Boolean status;

}

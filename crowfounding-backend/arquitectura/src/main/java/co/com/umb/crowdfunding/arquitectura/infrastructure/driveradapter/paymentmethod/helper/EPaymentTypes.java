package co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.paymentmethod.helper;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum EPaymentTypes {

    TARJETA_CREDITO(1, "Tarjeta de Credito", ""),
    CUENTA_AHORROS(2,"Cuenta de Ahorros", "")
    ;

    private int id;
    private String type;
    private String description;
}

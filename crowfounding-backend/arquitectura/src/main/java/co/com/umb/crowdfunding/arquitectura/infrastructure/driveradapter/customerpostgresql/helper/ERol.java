package co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.customerpostgresql.helper;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ERol {

    ADMIN(1,"admin"),
    BUYER(2,"Buyer"),
    SELLER(3, "Seller");

    private int id;
    private String rol;
}

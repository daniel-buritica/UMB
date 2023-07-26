package co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.purchaseorderposgresql;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder(toBuilder = true)
@Table(name = "purchase_order")
public class PurchaseOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_purchase_order")
    private int id;
    @Column(name = "id_payment_method")
    private int idPaymentMethod;
    @Column(name = "id_package")
    private int idPackage;
    @Column(name = "sale_time")
    private String saleTime;
    @Column(name = "status")
    private Boolean status;
    @Column(name = "id_customer")
    private int idCustomer;
}

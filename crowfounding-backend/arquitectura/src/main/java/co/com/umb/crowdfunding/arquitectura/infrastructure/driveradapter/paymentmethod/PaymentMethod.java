package co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.paymentmethod;

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
@Table(name = "payment_method")
public class PaymentMethod {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_payment_method")
    private int id;
    @Column(name = "id_payment_type")
    private int idPaymentType;
    @Column(name = "id_creator")
    private int idCreator;
    @Column(name = "card")
    private String card;
    @Column(name = "expiration_date")
    private String expirationDate;
    @Column(name = "cvc")
    private String cvc;
    @Column(name = "source_account")
    private int sourceAccount;
    @Column(name = "destination_account")
    private int destionationAccount;
    @Column(name = "source_name")
    private String sourceName;
    @Column(name = "destination_name")
    private String destinationName;

}

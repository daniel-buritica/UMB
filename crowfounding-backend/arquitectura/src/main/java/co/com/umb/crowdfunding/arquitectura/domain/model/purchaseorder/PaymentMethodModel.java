package co.com.umb.crowdfunding.arquitectura.domain.model.purchaseorder;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PaymentMethodModel {

    private int id;
    private PaymentTypesModel paymentTypesModel;
    private int idCreator;
    private String card;
    private String expirationDate;
    private String cvc;
    private int sourceAccount;
    private int destinationAccount;
    private String sourceName;
    private String destinationName;
}

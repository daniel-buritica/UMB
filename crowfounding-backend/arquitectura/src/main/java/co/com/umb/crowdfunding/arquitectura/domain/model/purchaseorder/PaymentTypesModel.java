package co.com.umb.crowdfunding.arquitectura.domain.model.purchaseorder;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PaymentTypesModel {

    private int id;
    private String type;
    private String description;

}

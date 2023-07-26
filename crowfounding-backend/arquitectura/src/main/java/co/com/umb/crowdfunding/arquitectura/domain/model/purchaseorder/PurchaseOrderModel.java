package co.com.umb.crowdfunding.arquitectura.domain.model.purchaseorder;

import co.com.umb.crowdfunding.arquitectura.domain.model.packagee.PackageModel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class PurchaseOrderModel {

    private int id;
    private PaymentMethodModel paymentMethodModel;
    private PackageModel packageModel;
    private String saleTime;
    private Boolean status;
    private int idCustomer;


}

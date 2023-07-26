package co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.purchaseorderposgresql.helper;

import co.com.umb.crowdfunding.arquitectura.domain.model.purchaseorder.PurchaseOrderModel;
import co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.helper.MapperGeneric;
import co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.packagepostgresql.PackageeAdapterImpl;
import co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.paymentmethod.PaymentMethodImpl;
import co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.purchaseorderposgresql.PurchaseOrder;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Component
public class PurchaseOrderMapper implements MapperGeneric<PurchaseOrder, PurchaseOrderModel> {

    private final PaymentMethodImpl paymentMethod;
    private final PackageeAdapterImpl packageeAdapter;

    @Override
    public PurchaseOrder toEntity(PurchaseOrderModel model) {
        LocalTime nowHour = LocalTime.now();
        DateTimeFormatter formatHour = DateTimeFormatter.ofPattern("HH:mm:ss");
        return PurchaseOrder.builder()
                .id(model.getId())
                .idPaymentMethod(model.getPaymentMethodModel().getId())
                .idPackage(model.getPackageModel().getId())
                .saleTime(nowHour.format(formatHour))
                .status(model.getStatus())
                .idCustomer(model.getIdCustomer())
                .build();
    }

    @Override
    public PurchaseOrderModel toModel(PurchaseOrder entity) {
        var objectPaymentMethod=paymentMethod.getById(entity.getIdPaymentMethod());
        var objectPackage=packageeAdapter.getById(entity.getIdPackage());
        return PurchaseOrderModel.builder()
                .id(entity.getId())
                .paymentMethodModel(objectPaymentMethod)
                .packageModel(objectPackage)
                .saleTime(entity.getSaleTime())
                .status(entity.getStatus())
                .idCustomer(entity.getIdCustomer())
                .build();
    }
    public List<PurchaseOrderModel> ToModelList(List<PurchaseOrder> entityPurchaseOrderList){
        return entityPurchaseOrderList.stream().map(this::toModel)
                .collect(Collectors.toList());
    }

}

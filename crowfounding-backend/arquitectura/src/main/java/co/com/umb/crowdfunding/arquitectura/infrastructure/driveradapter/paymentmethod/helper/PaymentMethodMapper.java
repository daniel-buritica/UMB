package co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.paymentmethod.helper;

import co.com.umb.crowdfunding.arquitectura.domain.model.project.ProjectModel;
import co.com.umb.crowdfunding.arquitectura.domain.model.purchaseorder.PaymentMethodModel;
import co.com.umb.crowdfunding.arquitectura.domain.model.purchaseorder.PaymentTypesModel;
import co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.helper.MapperGeneric;
import co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.paymentmethod.PaymentMethod;
import co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.projectpostgresql.Project;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class PaymentMethodMapper implements MapperGeneric<PaymentMethod, PaymentMethodModel> {
    @Override
    public PaymentMethod toEntity(PaymentMethodModel model) {
        return PaymentMethod.builder()
                .id(model.getId())
                .idPaymentType(buildPaymentTypes(model.getPaymentTypesModel()).getId())
                .idCreator(model.getIdCreator())
                .card(model.getCard())
                .expirationDate(model.getExpirationDate())
                .cvc(model.getCvc())
                .sourceAccount(model.getSourceAccount())
                .destionationAccount(model.getDestinationAccount())
                .sourceName(model.getSourceName())
                .destinationName(model.getDestinationName())
                .build();
    }

    @Override
    public PaymentMethodModel toModel(PaymentMethod entity) {
        return PaymentMethodModel.builder()
                .id(entity.getId())
                .paymentTypesModel(buildPaymentTypes(entity.getIdPaymentType()))
                .idCreator(entity.getIdCreator())
                .card(entity.getCard())
                .expirationDate(entity.getExpirationDate())
                .cvc(entity.getCvc())
                .sourceAccount(entity.getSourceAccount())
                .destinationAccount(entity.getDestionationAccount())
                .sourceName(entity.getSourceName())
                .destinationName(entity.getDestinationName())
                .build();
    }

    private PaymentTypesModel buildPaymentTypes(int id){
        EPaymentTypes[] allPayment = EPaymentTypes.values();
        var type = Arrays.stream(allPayment)
                .filter(ePaymentTypes -> ePaymentTypes.getId() == id)
                .findFirst().get().getType();
        return PaymentTypesModel.builder()
                .id(id)
                .type(type)
                .description("")
                .build();
    }

    private PaymentTypesModel buildPaymentTypes(PaymentTypesModel  paymentTypesModel){
        EPaymentTypes[] allPayment = EPaymentTypes.values();
        var id = Arrays.stream(allPayment)
                .filter(ePaymentTypes -> ePaymentTypes.getType().equalsIgnoreCase(paymentTypesModel.getType()))
                .findFirst().get().getId();
        return PaymentTypesModel.builder()
                .id(id)
                .type(paymentTypesModel.getType())
                .description("")
                .build();
    }

    public List<PaymentMethodModel> toModelList(List<PaymentMethod> entityPaymentList){
        return entityPaymentList.stream().map(this::toModel)
                .collect(Collectors.toList());
    }




}

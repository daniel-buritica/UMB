package co.com.umb.crowdfunding.arquitectura.domain.usecase;


import co.com.umb.crowdfunding.arquitectura.domain.model.gateway.PaymentMethodModelRepository;
import co.com.umb.crowdfunding.arquitectura.domain.model.purchaseorder.PaymentMethodModel;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@AllArgsConstructor
public class PaymentMethodUseCase {

    private PaymentMethodModelRepository methodModelRepository;

    public PaymentMethodModel getById(int id){
        return methodModelRepository.getById(id);
    }

    public PaymentMethodModel create(PaymentMethodModel paymentMethodModel){
        return methodModelRepository.create(paymentMethodModel);
    };

    public PaymentMethodModel update(PaymentMethodModel paymentMethodModel){
        return methodModelRepository.update(paymentMethodModel);
    };

    public List<PaymentMethodModel> getByIdCreator(int id){
        return methodModelRepository.getByIdCreator(id);
    }
}

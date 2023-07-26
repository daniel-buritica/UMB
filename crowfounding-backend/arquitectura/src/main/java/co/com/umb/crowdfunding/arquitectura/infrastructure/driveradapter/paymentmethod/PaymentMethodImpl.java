package co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.paymentmethod;

import co.com.umb.crowdfunding.arquitectura.domain.model.gateway.PaymentMethodModelRepository;
import co.com.umb.crowdfunding.arquitectura.domain.model.purchaseorder.PaymentMethodModel;
import co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.paymentmethod.helper.PaymentMethodMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@RequiredArgsConstructor
@Component
public class PaymentMethodImpl implements PaymentMethodModelRepository {

    private final PaymentMethodRepository paymentMethodRepository;
    private final PaymentMethodMapper paymentMethodMapper;



    @Override
    public PaymentMethodModel getById(int id) {
        var entityPayment = paymentMethodRepository.findPaymentMethodById(id);
        return paymentMethodMapper.toModel(entityPayment);
    }

    @Override
    public PaymentMethodModel create(PaymentMethodModel paymentMethodModel) {
        var paymentEntity = paymentMethodMapper.toEntity(paymentMethodModel);
        var paymentData = paymentMethodRepository.save(paymentEntity);
        return paymentMethodMapper.toModel(paymentData);
    }

    @Override
    public Boolean delete(int id) {
        return null;
    }

    @Override
    public PaymentMethodModel update(PaymentMethodModel PaymentMethodModel) {
        return null;
    }

    @Override
    public List<PaymentMethodModel> getByIdCreator(int id) {
        var paymentListEntity = paymentMethodRepository.getPaymentMethodByIdCreator(id);
        return paymentMethodMapper.toModelList(paymentListEntity);
    }
}

package co.com.umb.crowdfunding.arquitectura.domain.model.gateway;

import co.com.umb.crowdfunding.arquitectura.domain.model.purchaseorder.PaymentMethodModel;

import java.util.List;


public interface PaymentMethodModelRepository {

    public PaymentMethodModel getById(int id);
    public PaymentMethodModel create(PaymentMethodModel paymentMethodModel);
    public Boolean delete(int id);
    public PaymentMethodModel update(PaymentMethodModel PaymentMethodModel);
    public List<PaymentMethodModel> getByIdCreator(int id);


}

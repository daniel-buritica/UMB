package co.com.umb.crowdfunding.arquitectura.domain.usecase;

import co.com.umb.crowdfunding.arquitectura.domain.model.gateway.PurchaseOrderModelRepository;
import co.com.umb.crowdfunding.arquitectura.domain.model.packagee.PackageModel;
import co.com.umb.crowdfunding.arquitectura.domain.model.purchaseorder.PurchaseOrderModel;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@AllArgsConstructor
public class PurchaseOrderUseCase {

    private final PurchaseOrderModelRepository purchaseOrderModelRepository;

    public PurchaseOrderModel create(PurchaseOrderModel PurchaseOrderModel){
        return purchaseOrderModelRepository.create(PurchaseOrderModel);
    };

    public PurchaseOrderModel getById(int id){
        return purchaseOrderModelRepository.getById(id);
    }

    public List<PurchaseOrderModel> findByIdCustomer (int id){
        return purchaseOrderModelRepository.findByIdCustomer(id);
    }

    public Boolean delete(int id){
        return purchaseOrderModelRepository.delete(id);
    }



}

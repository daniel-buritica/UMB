package co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.purchaseorderposgresql;

import co.com.umb.crowdfunding.arquitectura.domain.model.gateway.PurchaseOrderModelRepository;
import co.com.umb.crowdfunding.arquitectura.domain.model.purchaseorder.PurchaseOrderModel;
import co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.purchaseorderposgresql.helper.PurchaseOrderMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@RequiredArgsConstructor
@Component
public class PurchaseOrderAdapterImpl implements PurchaseOrderModelRepository {

    private final PurchaseOrderMapper purchaseOrderMapper;
    private final PurchaseOrderRepository purchaseOrderRepository;


    @Override
    public PurchaseOrderModel getById(int id) {
        return null;
    }


    @Override
    public PurchaseOrderModel create(PurchaseOrderModel purchaseOrderModel) {
        var purchaseEntity = purchaseOrderMapper.toEntity(purchaseOrderModel);
        var purchaseData = purchaseOrderRepository.save(purchaseEntity);
        return purchaseOrderMapper.toModel(purchaseData);
    }

    @Override
    public Boolean delete(int id) {
        return purchaseOrderRepository.deleteById(id);
    }

    @Override
    public List<PurchaseOrderModel> findByIdCustomer(int id) {
        var listEntity = purchaseOrderRepository.findByIdCustomer(id);
        return purchaseOrderMapper.ToModelList(listEntity);
    }

    @Override
    public PurchaseOrderModel update(PurchaseOrderModel purchaseOrderModel) {
        return null;
    }
}

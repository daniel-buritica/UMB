package co.com.umb.crowdfunding.arquitectura.domain.model.gateway;

import co.com.umb.crowdfunding.arquitectura.domain.model.customer.CustomerModel;
import co.com.umb.crowdfunding.arquitectura.domain.model.project.ProjectModel;
import co.com.umb.crowdfunding.arquitectura.domain.model.purchaseorder.PurchaseOrderModel;

import java.util.List;

public interface PurchaseOrderModelRepository {

    public PurchaseOrderModel getById(int id);
    public PurchaseOrderModel create(PurchaseOrderModel purchaseOrderModel);
    public Boolean delete(int id);
    public List<PurchaseOrderModel> findByIdCustomer (int id);
    public PurchaseOrderModel update(PurchaseOrderModel purchaseOrderModel);
}

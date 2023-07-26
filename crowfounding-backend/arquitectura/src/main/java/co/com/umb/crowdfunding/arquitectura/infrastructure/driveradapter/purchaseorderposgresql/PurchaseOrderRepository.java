package co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.purchaseorderposgresql;


import co.com.umb.crowdfunding.arquitectura.domain.model.purchaseorder.PurchaseOrderModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PurchaseOrderRepository extends JpaRepository<PurchaseOrder, Integer> {

    List<PurchaseOrder> findByIdCustomer(int id);

    Boolean deleteById(int id);
}

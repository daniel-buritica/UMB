package co.com.umb.crowdfunding.arquitectura.infrastructure.entrypoints.purchaseservices;


import co.com.umb.crowdfunding.arquitectura.domain.model.purchaseorder.PurchaseOrderModel;
import co.com.umb.crowdfunding.arquitectura.domain.usecase.PurchaseOrderUseCase;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(value = "/api/v1/crowdfunding")
@AllArgsConstructor
public class PurchaseService {

    private final PurchaseOrderUseCase purchaseOrderUseCase;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("purchase/findAllById/{id}")
    public List<PurchaseOrderModel> findByAllId(@PathVariable int id){
        return purchaseOrderUseCase.findByIdCustomer(id);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/purchase/create")
    public PurchaseOrderModel create(@RequestBody PurchaseOrderModel purchaseOrderModel){
        return purchaseOrderUseCase.create(purchaseOrderModel);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/purchase/delete/{id}")
    public Boolean delete(@PathVariable int id){
        return purchaseOrderUseCase.delete(id);
    }


}

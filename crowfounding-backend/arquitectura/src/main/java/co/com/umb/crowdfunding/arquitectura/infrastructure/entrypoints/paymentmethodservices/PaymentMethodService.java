package co.com.umb.crowdfunding.arquitectura.infrastructure.entrypoints.paymentmethodservices;

import co.com.umb.crowdfunding.arquitectura.domain.model.purchaseorder.PaymentMethodModel;
import co.com.umb.crowdfunding.arquitectura.domain.usecase.PaymentMethodUseCase;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/crowdfunding")
@AllArgsConstructor
public class PaymentMethodService {

    private final PaymentMethodUseCase paymentMethodUseCase;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("payment/create")
    public PaymentMethodModel create(@RequestBody PaymentMethodModel paymentMethodModel){
        return paymentMethodUseCase.create(paymentMethodModel);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("payment/findByIdCreator/{id}")
    public List<PaymentMethodModel> findByIdCreator(@PathVariable int id){
        return paymentMethodUseCase.getByIdCreator(id);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("payment/findById/{id}")
    public PaymentMethodModel findById(@PathVariable int id){
        return paymentMethodUseCase.getById(id);
    }

}

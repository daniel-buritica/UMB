package co.com.umb.crowdfunding.arquitectura.infrastructure.entrypoints.customerservices;

import co.com.umb.crowdfunding.arquitectura.domain.model.customer.CustomerModel;
import co.com.umb.crowdfunding.arquitectura.domain.usecase.CustomerUseCase;
import lombok.AllArgsConstructor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@RequestMapping(value = "/api/v1/crowdfunding")
@AllArgsConstructor
public class CustomerService {

    private final CustomerUseCase customerUseCase;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/customer/create")
    public CustomerModel create(@RequestBody CustomerModel customerModel){
        return customerUseCase.create(customerModel);
    }
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/customer/exists/{email}")
    public Boolean existsCustomer(@PathVariable String email){
        return customerUseCase.exitsCustomer(email);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/customer/findByEmail/{email}")
    public CustomerModel findByEmail(@PathVariable String email){
        return customerUseCase.getByEmail(email);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/customer/update")
    public CustomerModel update(@RequestBody CustomerModel customerModel) {
        return customerUseCase.update(customerModel);
    }
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @Transactional
    @DeleteMapping("/customer/delete/{email}")
    public void delete(@PathVariable String email) {
        customerUseCase.delete(email);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/customer/findAll")
    public List<CustomerModel> findAll(){
        return customerUseCase.getAll();
    }


}

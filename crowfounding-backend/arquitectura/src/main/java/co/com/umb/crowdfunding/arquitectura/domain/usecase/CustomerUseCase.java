package co.com.umb.crowdfunding.arquitectura.domain.usecase;

import co.com.umb.crowdfunding.arquitectura.domain.model.customer.CustomerModel;
import co.com.umb.crowdfunding.arquitectura.domain.model.gateway.CustomerModelRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;
import java.util.List;

@Component
@AllArgsConstructor
public class CustomerUseCase {

    private CustomerModelRepository customerModelRepository;

    public CustomerModel getById(int id){
        return customerModelRepository.getById(id);
    }
    public CustomerModel getByEmail(String email){
        return customerModelRepository.getByEmail(email);
    }

    public CustomerModel create(CustomerModel customerModel){
        return customerModelRepository.create(customerModel);
    };

    public CustomerModel update(CustomerModel customerModel){
        return customerModelRepository.update(customerModel);
    };

    public List<CustomerModel> getAll(){
        return customerModelRepository.getAll();
    }

    public void delete(String email){

         customerModelRepository.delete(email);
    }

    public Boolean exitsCustomer(String email){
        return customerModelRepository.exitsCustomer(email);
    }
}

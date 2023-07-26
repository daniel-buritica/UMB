package co.com.umb.crowdfunding.arquitectura.domain.model.gateway;

import co.com.umb.crowdfunding.arquitectura.domain.model.customer.CustomerModel;
import java.util.List;

public interface CustomerModelRepository {

    public CustomerModel getById(int id);
    public CustomerModel getByEmail(String email);
    public CustomerModel create(CustomerModel customerModel);
    public void delete(String email);
    public List<CustomerModel> getAll ();
    public CustomerModel update(CustomerModel customerModel);
    public Boolean exitsCustomer(String email);
}

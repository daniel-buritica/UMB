package co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.customerpostgresql;

import co.com.umb.crowdfunding.arquitectura.domain.model.customer.CustomerModel;
import co.com.umb.crowdfunding.arquitectura.domain.model.gateway.CustomerModelRepository;
import co.com.umb.crowdfunding.arquitectura.domain.model.project.ProjectModel;
import co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.customerpostgresql.helper.CustomerMapper;
import co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.projectpostgresql.Project;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Component
public class CustomerAdapterImpl implements CustomerModelRepository {

    private final CustomerRepository customerRepository;
    private final CustomerMapper customerMapper;


    @Override
    public CustomerModel getById(int id) {
        return null;
    }

    @Override
    public CustomerModel getByEmail(String email) {
        var dataCustomer = customerRepository.findCustomerByEmail(email);
        return customerMapper.toModel(dataCustomer);
    }

    @Override
    public CustomerModel create(CustomerModel customerModel) {
        var customerEntity = customerMapper.toEntity(customerModel);
        var customerData = customerRepository.save(customerEntity);
        return customerMapper.toModel(customerData);
    }

    @Override
    public void delete(String email) {
         customerRepository.deleteCustomerByEmail(email);
    }

    @Override
    public List<CustomerModel> getAll() {
        var listEntity2 = customerRepository.findAll();
        return toModelList(listEntity2);
    }

    @Override
    public CustomerModel update(CustomerModel customerModel) {
        var customerEntity = customerRepository.findCustomerByEmail(customerModel.getEmail());
        var customerModelUpdate = customerMapper.buildCustomerModelToUpdate(customerModel, customerEntity);
        var customerModelData = customerMapper.toEntity(customerModelUpdate);
        return customerMapper.toModel(customerRepository.save(customerModelData));
    }

    @Override
    public Boolean exitsCustomer(String email) {
        return customerRepository.existsCustomerByEmail(email);
    }


    private List<CustomerModel> toModelList(List<Customer> entityCustomer) {
        return entityCustomer.stream().map(customerMapper::toModel)
                .collect(Collectors.toList());
    }


}

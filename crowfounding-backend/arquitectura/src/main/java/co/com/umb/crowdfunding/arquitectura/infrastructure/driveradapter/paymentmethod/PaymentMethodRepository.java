package co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.paymentmethod;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PaymentMethodRepository extends JpaRepository<PaymentMethod, Integer> {

    List<PaymentMethod> getPaymentMethodByIdCreator(int id);
    PaymentMethod findPaymentMethodById(int id);

}

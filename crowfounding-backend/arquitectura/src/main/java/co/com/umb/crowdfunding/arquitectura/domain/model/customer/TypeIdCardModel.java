package co.com.umb.crowdfunding.arquitectura.domain.model.customer;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TypeIdCardModel {

    private int id;
    private String type;
}

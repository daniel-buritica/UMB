package co.com.umb.crowdfunding.arquitectura.domain.model.customer;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class IndicatorCountryModel {

    private int id;
    private String indicator;
}

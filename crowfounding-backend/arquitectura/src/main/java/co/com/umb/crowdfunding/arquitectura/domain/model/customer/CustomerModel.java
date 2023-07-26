package co.com.umb.crowdfunding.arquitectura.domain.model.customer;

import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CustomerModel {

    private int id;
    private String firstName;
    private String secondName;
    private String firstSurname;
    private TypeIdCardModel typeIdCardModel;
    private int idCard;
    private String email;
    private CityModel cityModel;
    private String phone;
    private RolModel rolModel;
    private String dateBirth;
    private StatusModel statusModel;
    private String password;
    private String profilePicture;


}

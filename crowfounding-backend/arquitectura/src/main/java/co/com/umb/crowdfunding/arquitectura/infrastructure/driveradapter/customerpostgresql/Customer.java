package co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.customerpostgresql;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder(toBuilder = true)
@Table(name = "customer")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_customer")
    private int id;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "second_name")
    private String secondName;
    @Column(name = "first_surname")
    private String firstSurname;
    @Column(name = "id_type_id_card")
    private int idTypeIdCard;
    @Column(name = "id_card")
    private int idCard;
    @Column(name = "email")
    private String email;
    @Column(name = "id_city")
    private int idCity;
    @Column(name = "phone")
    private String phone;
    @Column(name = "id_rol")
    private int idRol;
    @Column(name = "date_birth")
    private String dateBirth;
    @Column(name = "id_status")
    private int idStatus;
    @Column(name = "passwd")
    private String password;
    @Column(name = "profile_picture")
    private String profilePicture;

}

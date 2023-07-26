package co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.packagepostgresql;

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
@Table(name = "package")
public class Packagee {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_package")
    private int id;
    @Column(name = "package")
    private String packagee;
    @Column(name = "description")
    private String description;
    @Column(name = "price")
    private int price;
    @Column(name = "id_project")
    private int idProject;

}

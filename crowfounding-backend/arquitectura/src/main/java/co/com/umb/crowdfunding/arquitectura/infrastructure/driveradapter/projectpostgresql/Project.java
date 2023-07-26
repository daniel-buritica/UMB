package co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.projectpostgresql;

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
@Table(name = "project")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_project")
    private int id;
    @Column(name = "project_name")
    private String projectName;
    @Column(name = "id_creator_project")
    private int idCreatorProject;
    @Column(name = "description")
    private String description;
    @Column(name = "total")
    private int total;
    @Column(name = "id_categori")
    private int idCategory;
    @Column(name = "status")
    private Boolean status;
    @Column(name = "image_category")
    private String imageCategory;



}

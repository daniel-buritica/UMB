package co.com.umb.crowdfunding.arquitectura.domain.model.project;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProjectModel {

    private int id;
    private String projectName;
    private int idCreatorProject;
    private String description;
    private int total;
    private CategoryModel categoryModel;
    private Boolean status;
    private String imageCategory;
}

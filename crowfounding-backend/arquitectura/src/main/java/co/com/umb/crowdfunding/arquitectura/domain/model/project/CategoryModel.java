package co.com.umb.crowdfunding.arquitectura.domain.model.project;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CategoryModel {

    private int id;
    private String type;
    private String description;
    private String imageCategory;
}

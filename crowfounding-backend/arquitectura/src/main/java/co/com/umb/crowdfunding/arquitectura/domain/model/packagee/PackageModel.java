package co.com.umb.crowdfunding.arquitectura.domain.model.packagee;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PackageModel {

    private int id;
    private String packagee;
    private String description;
    private int price;
    private int idProject;
}

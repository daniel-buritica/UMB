package co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.projectpostgresql.helper;

import co.com.umb.crowdfunding.arquitectura.domain.model.project.CategoryModel;
import co.com.umb.crowdfunding.arquitectura.domain.model.project.ProjectModel;
import co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.helper.MapperGeneric;
import co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.projectpostgresql.Project;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class ProjectMapper implements MapperGeneric<Project, ProjectModel> {
    @Override
    public Project toEntity(ProjectModel model) {
        return Project.builder()
                .id(model.getId())
                .projectName(model.getProjectName())
                .idCreatorProject(model.getIdCreatorProject())
                .description(model.getDescription())
                .total(model.getTotal())
                .idCategory(BuildCategoryModel(model).getId())
                .status(model.getStatus())
                .imageCategory(BuildCategoryModel(model).getImageCategory())
                .build();
    }

    @Override
    public ProjectModel toModel( Project entity) {
        return ProjectModel.builder()
                .id(entity.getId())
                .projectName(entity.getProjectName())
                .idCreatorProject(entity.getIdCreatorProject())
                .description(entity.getDescription())
                .total(entity.getTotal())
                .categoryModel(BuildCategoryModel(entity.getIdCategory()))
                .status(entity.getStatus())
                .imageCategory(entity.getImageCategory())
                .build();
    }

    private CategoryModel BuildCategoryModel(int id){
        ECategory[] allCategory = ECategory.values();
        var type = Arrays.stream(allCategory).filter(eCategory -> eCategory.getId() == id)
                .findFirst().get().getType();
        var image = Arrays.stream(allCategory).filter(eCategory -> eCategory.getId() == id)
                .findFirst().get().getImageCategory();
        return CategoryModel.builder()
                .id(id)
                .type(type)
                .description("")
                .imageCategory(image)
                .build();
    }

    private CategoryModel BuildCategoryModel(ProjectModel model){
        ECategory[] allCategory = ECategory.values();
        var typeModel = model.getCategoryModel().getType();
        var image =Arrays.stream(allCategory).filter(eCategory -> eCategory.getType().equalsIgnoreCase(typeModel))
                .findFirst().get().getImageCategory();
        var id= Arrays.stream(allCategory).filter(eCategory -> eCategory.getType().equalsIgnoreCase(typeModel))
                .findFirst().get().getId();
        return CategoryModel.builder()
                .id(id)
                .type(typeModel)
                .description("")
                .imageCategory(image)
                .build();
    }
}

package co.com.umb.crowdfunding.arquitectura.domain.usecase;

import co.com.umb.crowdfunding.arquitectura.domain.model.gateway.ProjectModelRepository;
import co.com.umb.crowdfunding.arquitectura.domain.model.project.ProjectModel;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@AllArgsConstructor
public class ProjectUseCase {

    private final ProjectModelRepository projectModelRepository;


    public ProjectModel getById(int id){
        return projectModelRepository.getById(id);
    }

    public ProjectModel create(ProjectModel projectModel){
        return projectModelRepository.create(projectModel);
    };

    public ProjectModel update(ProjectModel projectModel){
        return projectModelRepository.update(projectModel);
    };

    public List<ProjectModel> getAll(){
        return projectModelRepository.getAll();
    }

    public ProjectModel disableAccount(ProjectModel projectModel){
        return projectModelRepository.disableAccount(projectModel);
    }

    public Boolean delete(int id){
        return projectModelRepository.delete(id);
    }


}

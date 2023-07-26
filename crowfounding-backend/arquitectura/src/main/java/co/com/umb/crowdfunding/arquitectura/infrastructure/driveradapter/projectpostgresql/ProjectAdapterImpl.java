package co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.projectpostgresql;

import co.com.umb.crowdfunding.arquitectura.domain.model.gateway.ProjectModelRepository;
import co.com.umb.crowdfunding.arquitectura.domain.model.project.ProjectModel;
import co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.projectpostgresql.helper.ProjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Component
public class ProjectAdapterImpl implements ProjectModelRepository {

    private final ProjectRepository projectRepository;
    private final ProjectMapper projectMapper;

    @Override
    public ProjectModel getById(int id) {
        var projectEntity = projectRepository.getProjectById(id);
        return projectMapper.toModel(projectEntity);
    }

    @Override
    public ProjectModel getByEmail(String email) {
        return null;
    }

    @Override
    public ProjectModel create(ProjectModel projectModel) {
        var projectEntity = projectMapper.toEntity(projectModel);
        var projectData = projectRepository.save(projectEntity);
        return projectMapper.toModel(projectData);
    }

    @Override
    public Boolean delete(int id) {
        return projectRepository.deleteById(id);
    }


    @Override
    public List<ProjectModel> getAll() {
        var listEntity = projectRepository.findAll();
        return toModelList(listEntity);
    }

    @Override
    public ProjectModel update(ProjectModel projectModel) {
        var projectEntity = projectMapper.toEntity(projectModel);
        var projectData = projectRepository.save(projectEntity);
        return projectMapper.toModel(projectData);
    }

    @Override
    public ProjectModel disableAccount(ProjectModel projectModel) {
        var projectEntity = projectRepository.getProjectById(projectModel.getId());
        var projectData = ProjectModel.builder()


                .build();

        return null;
    }


    private List<ProjectModel> toModelList(List<Project> entityProjects){
        return entityProjects.stream().map(projectMapper::toModel)
                .collect(Collectors.toList());
    }

}

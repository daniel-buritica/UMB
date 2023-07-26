package co.com.umb.crowdfunding.arquitectura.domain.model.gateway;

import co.com.umb.crowdfunding.arquitectura.domain.model.project.ProjectModel;

import java.util.List;

public interface ProjectModelRepository {

    public ProjectModel getById(int id);
    public ProjectModel getByEmail(String email);
    public ProjectModel create(ProjectModel projectModel);
    public Boolean delete(int id);
    public List<ProjectModel> getAll ();
    public ProjectModel update(ProjectModel projectModel);
    public ProjectModel disableAccount(ProjectModel projectModel);




}

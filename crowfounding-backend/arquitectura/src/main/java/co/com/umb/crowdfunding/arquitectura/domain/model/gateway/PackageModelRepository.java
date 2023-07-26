package co.com.umb.crowdfunding.arquitectura.domain.model.gateway;

import co.com.umb.crowdfunding.arquitectura.domain.model.packagee.PackageModel;

import java.util.List;

public interface PackageModelRepository {

    public PackageModel getById(int id);
    public PackageModel create(PackageModel packageModel);
    public Boolean delete(int id);
    public PackageModel update(PackageModel packageModel);
    public List<PackageModel> getAll();
    public List<PackageModel> getByIdProject(int id);
}

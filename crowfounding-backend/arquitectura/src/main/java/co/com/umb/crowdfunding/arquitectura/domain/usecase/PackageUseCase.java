package co.com.umb.crowdfunding.arquitectura.domain.usecase;


import co.com.umb.crowdfunding.arquitectura.domain.model.gateway.PackageModelRepository;
import co.com.umb.crowdfunding.arquitectura.domain.model.packagee.PackageModel;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@AllArgsConstructor
public class PackageUseCase {

    private PackageModelRepository packageModelRepository;

    public PackageModel getById(int id) {
        return packageModelRepository.getById(id);
    }

    public PackageModel create(PackageModel packageModel) {
        return packageModelRepository.create(packageModel);


    }

    public PackageModel update(PackageModel packageModel) {
        return packageModelRepository.update(packageModel);
    }

    public List<PackageModel> getAll(){
        return packageModelRepository.getAll();
    }

    public List<PackageModel> findByIdProject(int id){
        return packageModelRepository.getByIdProject(id);
    }

}
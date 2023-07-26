package co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.packagepostgresql;

import co.com.umb.crowdfunding.arquitectura.domain.model.gateway.PackageModelRepository;
import co.com.umb.crowdfunding.arquitectura.domain.model.packagee.PackageModel;
import co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.packagepostgresql.helper.PackageMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@RequiredArgsConstructor
@Component
public class PackageeAdapterImpl implements PackageModelRepository {

    private final PackageeRepository packageeRepository;
    private final PackageMapper packageMapper;

    @Override
    public PackageModel getById(int id) {
        var entityPackage = packageeRepository.findPackageeById(id);
        return packageMapper.toModel(entityPackage);
    }

    @Override
    public PackageModel create(PackageModel packageModel) {
        var packageEntity = packageMapper.toEntity(packageModel);
        var packageData = packageeRepository.save(packageEntity);
        return packageMapper.toModel(packageData);
    }

    @Override
    public Boolean delete(int id) {
        return null;
    }

    @Override
    public PackageModel update(PackageModel packageModel) {
        return null;
    }

    @Override
    public List<PackageModel> getAll() {
        var listEntity = packageeRepository.findAll();
        return packageMapper.ToModelList(listEntity);
    }

    @Override
    public List<PackageModel> getByIdProject(int id) {
        var listEntity = packageeRepository.findPackageeByIdProject(id);
        return packageMapper.ToModelList(listEntity);
    }


}

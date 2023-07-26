package co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.packagepostgresql.helper;

import co.com.umb.crowdfunding.arquitectura.domain.model.packagee.PackageModel;
import co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.helper.MapperGeneric;
import co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.packagepostgresql.Packagee;
import org.springframework.stereotype.Component;


import java.util.List;
import java.util.stream.Collectors;

@Component
public class PackageMapper implements MapperGeneric<Packagee, PackageModel> {
    @Override
    public Packagee toEntity(PackageModel model) {
        return Packagee.builder()
                .id(model.getId())
                .packagee(model.getPackagee())
                .description(model.getDescription())
                .price(model.getPrice())
                .idProject(model.getIdProject())
                .build();
    }

    @Override
    public PackageModel toModel(Packagee entity) {
        return PackageModel.builder()
                .id(entity.getId())
                .packagee(entity.getPackagee())
                .description(entity.getDescription())
                .price(entity.getPrice())
                .idProject(entity.getIdProject())
                .build();
    }

    public List<PackageModel> ToModelList(List<Packagee> entityPackageList){
        return entityPackageList.stream().map(this::toModel)
                .collect(Collectors.toList());
    }
}

package co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.helper;

public interface MapperGeneric <E, M>{

    E toEntity(M model);
    M toModel(E entity);
}

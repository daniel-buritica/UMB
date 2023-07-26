package co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.customerpostgresql.helper;

import co.com.umb.crowdfunding.arquitectura.domain.model.customer.*;
import co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.customerpostgresql.Customer;
import co.com.umb.crowdfunding.arquitectura.infrastructure.driveradapter.helper.MapperGeneric;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class CustomerMapper implements MapperGeneric<Customer, CustomerModel> {

    @Override
    public Customer toEntity(CustomerModel model) {
        return Customer.builder()
                .id(model.getId())
                .firstName(model.getFirstName())
                .secondName(model.getSecondName())
                .firstSurname(model.getFirstSurname())
                .idTypeIdCard(buildTypeIdCard(model).getId())
                .idCard(model.getIdCard())
                .email(model.getEmail())
                .idCity(buildCityModel(model).getId())
                .phone(model.getPhone())
                .idRol(buildRolModel(model).getId())
                .dateBirth(model.getDateBirth())
                .idStatus(model.getStatusModel().getId())
                .password(String.valueOf(model.getIdCard()))
                .profilePicture(model.getProfilePicture())
                .build();
    }

    @Override
    public CustomerModel toModel(Customer entity) {
        return CustomerModel.builder()
                .id(entity.getId())
                .firstName(entity.getFirstName())
                .secondName(entity.getSecondName())
                .firstSurname(entity.getFirstSurname())
                .typeIdCardModel(buildTypeIdCard(entity.getIdTypeIdCard()))
                .idCard(entity.getIdCard())
                .email(entity.getEmail())
                .cityModel(buildCityModel(entity.getIdCity()))
                .phone(entity.getPhone())
                .rolModel(buildRolModel(entity.getIdRol()))
                .dateBirth(entity.getDateBirth())
                .statusModel(buildStatusModel(entity.getIdStatus()))
                .password(entity.getPassword())
                .profilePicture(entity.getProfilePicture())
                .build();
    }

    private TypeIdCardModel buildTypeIdCard(int id){
        ETypeCard [] allType = ETypeCard.values();
        var type = Arrays.stream(allType).filter(eTypeCard -> eTypeCard.getId() == id)
                .findFirst().get().getType();
        return TypeIdCardModel.builder()
                .id(id)
                .type(type)
                .build();
    }

    private TypeIdCardModel buildTypeIdCard(CustomerModel model){
        ETypeCard [] allType = ETypeCard.values();
        var modelType = model.getTypeIdCardModel().getType();
        var id = Arrays.stream(allType).filter(eTypeCard -> eTypeCard.getType().equalsIgnoreCase(modelType))
                .findFirst().get().getId();
        return TypeIdCardModel.builder()
                .id(id)
                .type(modelType)
                .build();
    }
    private CityModel buildCityModel(CustomerModel model){
        ECity [] allCity = ECity.values();
        var cityModel = model.getCityModel().getCity();
        var id = Arrays.stream(allCity).filter(eTypeCard -> eTypeCard.getCity().equalsIgnoreCase(cityModel))
                .findFirst().get().getId();
        return CityModel.builder()
                .id(id)
                .countryModel(buildCountryModel(id))
                .city(cityModel)
                .build();
    }

    private CityModel buildCityModel(int id){
        ECity [] allCity = ECity.values();
        var city = Arrays.stream(allCity).filter(eTypeCard -> eTypeCard.getId() == id)
                .findFirst().get().getCity();
        return CityModel.builder()
                .id(id)
                .countryModel(buildCountryModel(id))
                .city(city)
                .build();
    }
    private CountryModel buildCountryModel(int id){
        ECountry [] allCountry = ECountry.values();
        var iso = Arrays.stream(allCountry).filter(eTypeCard -> eTypeCard.getId() == id)
                .findFirst().get().getIso();
        var country = Arrays.stream(allCountry).filter(eTypeCard -> eTypeCard.getId() == id)
                .findFirst().get().getCountry();
        return CountryModel.builder()
                .id(id)
                .iso(iso)
                .country(country)
                .indicatorCountryModel(buildIndicatorCountryModel(id))
                .build();
    }

    private IndicatorCountryModel buildIndicatorCountryModel(int id){
        EIndicatorCountry [] allIndicator = EIndicatorCountry.values();
        var indicator = Arrays.stream(allIndicator).filter(eTypeCard -> eTypeCard.getId() == id)
                .findFirst().get().getIndicator();
        return IndicatorCountryModel.builder()
                .id(id)
                .indicator(indicator)
                .build();
    }

    private RolModel buildRolModel(CustomerModel model){
        ERol [] allRol = ERol.values();
        var rolModel = model.getRolModel().getRol();
        var id = Arrays.stream(allRol).filter(eRol -> eRol.getRol().equalsIgnoreCase(rolModel))
                .findFirst().get().getId();
        return RolModel.builder()
                .id(id)
                .rol(rolModel)
                .build();
    }

    private RolModel buildRolModel(int id){
        ERol [] allRol = ERol.values();
        var rol = Arrays.stream(allRol).filter(eTypeCard -> eTypeCard.getId() == id)
                .findFirst().get().getRol();
        return RolModel.builder()
                .id(id)
                .rol(rol)
                .build();
    }

    private StatusModel buildStatusModel(int id){
        EStatus [] allStatus = EStatus.values();
        var status = Arrays.stream(allStatus).filter(eTypeCard -> eTypeCard.getId() == id)
                .findFirst().get().getStatus();
        return StatusModel.builder()
                .id(id)
                .status(status)
                .build();
    }

    public CustomerModel buildCustomerModelToUpdate(CustomerModel customerModel, Customer customerEntity){
        return CustomerModel.builder()
                .id(isEmptyOrNull(customerEntity.getId())?customerEntity.getId():customerEntity.getId())
                .firstName(isEmptyOrNull(customerModel.getFirstName())?customerEntity.getFirstName()
                        :customerModel.getFirstName())
                .secondName(isEmptyOrNull(customerModel.getSecondName())?customerEntity.getSecondName()
                        :customerModel.getSecondName())
                .firstSurname(isEmptyOrNull(customerModel.getFirstSurname())?customerEntity.getFirstSurname()
                        :customerModel.getFirstSurname())
                .typeIdCardModel(isEmptyOrNull(customerModel.getTypeIdCardModel())
                        ?buildTypeIdCard(customerEntity.getIdTypeIdCard())
                        :customerModel.getTypeIdCardModel())
                .idCard(isEmptyOrNull(customerModel.getIdCard())?customerEntity.getIdCard()
                        :customerModel.getIdCard())
                .email(isEmptyOrNull(customerModel.getEmail())?customerEntity.getEmail()
                        :customerModel.getEmail())
                .cityModel(isEmptyOrNull(customerModel.getCityModel())
                        ?buildCityModel(customerEntity.getIdCity())
                        :customerModel.getCityModel())
                .phone(isEmptyOrNull(customerModel.getPhone())?customerEntity.getPhone()
                        :customerModel.getPhone())
                .rolModel(isEmptyOrNull(customerModel.getRolModel())
                        ?buildRolModel(customerEntity.getIdRol())
                        :customerModel.getRolModel())
                .dateBirth(isEmptyOrNull(customerModel.getDateBirth())?customerEntity.getDateBirth()
                        :customerModel.getDateBirth())
                .statusModel(isEmptyOrNull(customerModel.getStatusModel())
                        ?buildStatusModel(customerEntity.getIdStatus())
                        :customerModel.getStatusModel())
                .password(String.valueOf(customerEntity.getIdCard()))
                .profilePicture(customerEntity.getProfilePicture())
                .build();
    }

    private Boolean isEmptyOrNull(Object param){
        if (param == null ){
            return true;
        }
        if (param instanceof String){
            String s = (String) param;
            if (s.isEmpty()){
                return true;
            }
        }
        if (param instanceof Integer){
            int s = (Integer) param;
            if (s == 0){
                return true;
            }
        }
        return false;
    }

}

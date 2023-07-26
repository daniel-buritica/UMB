export interface ICustomerResponse{
    id:string;
    firstName:string;
    secondName:string;
    firstSurname:string;
    typeIdCardModel:ItypeIdCardModel;
    idCard:string;
    email:string;
    cityModel:IcityModel;
    phone:string;
    rolModel: IrolModel;
    dateBirth:string;
    statusModel:IstatusModel;
    password:string;
}

export interface ItypeIdCardModel{    
    id:string;
    type:string;
}

export interface IcityModel{    
    id:string
    countryModel:IcountryModel;
    city:string;
}

export interface IcountryModel{
    id:string
    iso:string
    country:string;
    indicatorCountryModel: IindicatorCountryModel
}

export interface IindicatorCountryModel{    
    id:string
    indicator:string;
}

export interface IrolModel{    
    id:string
    rol:string;
}

export interface IstatusModel{    
    id:string
    status:string;
}
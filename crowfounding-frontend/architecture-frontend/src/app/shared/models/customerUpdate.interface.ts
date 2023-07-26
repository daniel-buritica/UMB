export interface ICustomerUpdate{
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
}

export interface ItypeIdCardModel{        
    type:string;
}

export interface IcityModel{        
    countryModel:IcountryModel;
    city:string;
}

export interface IcountryModel{        
    indicatorCountryModel: IindicatorCountryModel
}

export interface IindicatorCountryModel{        
    indicator:string;
}

export interface IrolModel{        
    rol:string;
}

export interface IstatusModel{    
    id:string
    status:string;
}
export interface IPurchase{    
    paymentMethodModel:IPayment;
    packageModel:IPackage;
    description:string;
    saleTime:string;
    status:boolean;
    idCustomer:number;
};

export interface IPayment{    
    paymentTypesModel:IPaymentType;
    idCreator:number;
    card:string,
    expirationDate:string,
    cvc:string
    sourceAccount:number;
    destinationAccount:number;
    sourceName:string;
    destinationName:string;
};
export interface IPaymentType{
    type:string;
    description:string;
}
export interface IPackage{
    packagee:string;
    description:string;
    price:number;
    idProject:number;
}

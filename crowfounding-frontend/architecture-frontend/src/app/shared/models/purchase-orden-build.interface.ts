export interface IPurchaseBuild{        
    paymentMethodModel:IPayment;
    packageModel:IPackage;
    description:string;
    saleTime:string;
    status:boolean;
    idCustomer:number;
};

export interface IPayment{    
    id:number;
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
    id:number;
    type:string;
    description:string;
}
export interface IPackage{
    id:number;
    packagee:string;
    description:string;
    price:number;
    idProject:number;
}

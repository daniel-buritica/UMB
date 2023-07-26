export interface ITransfer{
    paymentTypesModel:IPaymenttype;
    idCreator:number;
    card:string;
    expirationDate:string;
    cvc:string;
    sourceName:string;
}

export interface IPaymenttype{    
    type:string;
};
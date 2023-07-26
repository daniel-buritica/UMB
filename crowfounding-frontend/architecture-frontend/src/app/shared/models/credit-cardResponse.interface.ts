export interface ITransferResponse{
    id:number;
    paymentTypesModel:IPaymenttype;
    idCreator:number;
    card:string,
    expirationDate:string,
    cvc:string
    sourceAccount:number;
    destinationAccount:number;
    sourceName:string;
    destinationName:string;
}

export interface IPaymenttype{    
    id:number;
    type:string;
    description:string;
};
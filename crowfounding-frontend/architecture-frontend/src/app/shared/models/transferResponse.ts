export interface ITransferResponse{
    id:number;
    paymentTypesModel:IPaymenttype;
    idCreator:number;
    card:number,
    expirationDate:string,
    cvc:number
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
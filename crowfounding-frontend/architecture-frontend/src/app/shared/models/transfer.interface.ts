export interface ITransfer{
    paymentTypesModel:IPaymenttype;
    idCreator:number;
    sourceAccount:number;
    destinationAccount:number;
    sourceName:string;
    destinationName:string;
}

export interface IPaymenttype{    
    type:string;
};
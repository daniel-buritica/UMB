import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {ITransfer} from '../models/transfer.interface';
import {ITransferResponse} from '../models/transferResponse';
import {GlobalService} from '../services/global.service'

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {


  private BASE_PATH:string = this.globalService.host+'/api/v1/crowdfunding';

  constructor(private htpp:HttpClient,
    private globalService: GlobalService) { }
   // Crear payment
   public createPayment(form:ITransfer):Observable<ITransferResponse>{
    var path = this.BASE_PATH + '/payment/create';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers, withCredentials: true };
    return this.htpp.post<ITransferResponse>(path,form, options);
  }

   // Traer todos los payment
   public findByIdCreator(idCreator:number):Observable<ITransferResponse[]>{
    var path = this.BASE_PATH + '/payment/findByIdCreator/'+idCreator;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers, withCredentials: true };
    return this.htpp.get<ITransferResponse[]>(path, options);
  }

}
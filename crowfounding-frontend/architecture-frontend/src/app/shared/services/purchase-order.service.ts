import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {IPurchase} from '../models/purchase-order.interface';
import {IPurchaseResponse} from '../models/purchase-orderResponse.interface';
import {GlobalService} from '../services/global.service'

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {

  private BASE_PATH:string = this.globalService.host+'/api/v1/crowdfunding';

  constructor(private htpp:HttpClient,
    private globalService: GlobalService) { }

     // Crear purchase
   public createPurchase(form:IPurchase):Observable<IPurchaseResponse>{
    var path = this.BASE_PATH + '/purchase/create';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers, withCredentials: true };
    return this.htpp.post<IPurchaseResponse>(path,form,options);
  }

   // Traer todos los purchase
   public findAllPurchaseOrderByIdCreator(idCreator:number):Observable<IPurchaseResponse[]>{
    var path = this.BASE_PATH + '/purchase/findAllById/'+idCreator;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers, withCredentials: true };
    return this.htpp.get<IPurchaseResponse[]>(path,options);
  }
    // Delete purchase
    public deletePurchaseById(id:number):Observable<void>{
      var path = this.BASE_PATH + '/purchase/delete/'+id;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      const options = { headers, withCredentials: true };
      return this.htpp.delete<void>(path,options);
    }
}

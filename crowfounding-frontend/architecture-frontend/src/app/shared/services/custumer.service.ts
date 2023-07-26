import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICustomerResponse } from '../models/customerResponse.interface';
import { ICustomer } from '../models/customer.interface';
import { ICustomerUpdate } from '../models/customerUpdate.interface';
import { GlobalService } from '../services/global.service'


@Injectable({
  providedIn: 'root'
})
export class CustumerService {

  private BASE_PATH: string = this.globalService.host + '/api/v1/crowdfunding';

  constructor(private http: HttpClient,
    private globalService: GlobalService) { }


  public createCustomer(form: ICustomer): Observable<ICustomerResponse> {
    var path = this.BASE_PATH + '/customer/create';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers, withCredentials: true };
    return this.http.post<ICustomerResponse>(path, form, options);
  }

  public findCustomerByEmail(email: String): Observable<ICustomerResponse> {
    var path = this.BASE_PATH + '/customer/findByEmail/' + email;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers, withCredentials: true };
    return this.http.get<ICustomerResponse>(path, options);
  }

  public updateCustomer(form: ICustomerUpdate): Observable<ICustomerResponse> {
    var path = this.BASE_PATH + '/customer/update';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers, withCredentials: true };
    return this.http.put<ICustomerResponse>(path, form, options);
  }
  // Traer todos los proyectos
  public findByAll(): Observable<ICustomerResponse[]> {
    var path = this.BASE_PATH + '/customer/findAll';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers, withCredentials: true };
    return this.http.get<ICustomerResponse[]>(path, options);
  }

  // Validar que exista el correo en la base de datos 
  public verifyExistEmail(emial: string): Observable<Boolean> {
    var path = this.BASE_PATH + '/customer/exists/' + emial;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers, withCredentials: true };
    return this.http.get<Boolean>(path, options);
  }
  // Delete Customer
  public deleteCustomerByEmail(email: string): Observable<void> {
    var path = this.BASE_PATH + '/customer/delete/' + email;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers, withCredentials: true };
    return this.http.delete<void>(path, options);
  }

}

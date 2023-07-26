import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {IPackage} from '../models/package.interface';
import {IPackageResponse} from '../models/packageResponse.interface';
import {GlobalService} from '../services/global.service'

@Injectable({
  providedIn: 'root'
})
export class PackageService {


  private BASE_PATH:string = this.globalService.host+'/api/v1/crowdfunding';

  constructor(private htpp:HttpClient,
    private globalService: GlobalService) { }
   // Crear package
   public createPackage(form:IPackage):Observable<IPackageResponse>{
    var path = this.BASE_PATH + '/package/create';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers, withCredentials: true };
    return this.htpp.post<IPackageResponse>(path,form, options);
  }

   // Traer todos los proyectos
   public findByAll():Observable<IPackageResponse[]>{
    var path = this.BASE_PATH + '/package/getAll';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers, withCredentials: true };
    return this.htpp.get<IPackageResponse[]>(path, options);
  }
   // Traer project por id de project
   public findByIdProject(id:number):Observable<IPackageResponse[]>{
    var path = this.BASE_PATH + '/package/getAllByIdProject/'+id;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers, withCredentials: true };
    return this.htpp.get<IPackageResponse[]>(path, options);
  }


}

import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {IProjectResponse} from '../models/projectResponse.interface';
import {IProject} from '../models/project.interface';
import {GlobalService} from '../services/global.service'

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private BASE_PATH:string = this.globalService.host+'/api/v1/crowdfunding';

  constructor(private htpp:HttpClient,
    private globalService: GlobalService) { }

  // Traer todos los proyectos
  public findByAll():Observable<IProjectResponse[]>{
    var path = this.BASE_PATH + '/project/findAll';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers, withCredentials: true };
    return this.htpp.get<IProjectResponse[]>(path,options);
  }

  // Crear projecto
  public createProject(form:IProject):Observable<IProjectResponse>{
    var path = this.BASE_PATH + '/project/create';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers, withCredentials: true };
    return this.htpp.post<IProjectResponse>(path,form,options);
  }

  public findProjectById(id:number):Observable<IProjectResponse>{
    var path = this.BASE_PATH + '/project/findById/' + id;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers, withCredentials: true };
    return this.htpp.get<IProjectResponse>(path,options);
  }

  // Delete project
  public deleteProjectById(id:number):Observable<void>{
    var path = this.BASE_PATH + '/project/delete/'+id;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers, withCredentials: true };
    return this.htpp.delete<void>(path,options);
  }

  public updateProject(form:IProject):Observable<IProjectResponse>{
    var path = this.BASE_PATH + '/project/update';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers, withCredentials: true };
    return this.htpp.put<IProjectResponse>(path, form,options);
  }

  
}

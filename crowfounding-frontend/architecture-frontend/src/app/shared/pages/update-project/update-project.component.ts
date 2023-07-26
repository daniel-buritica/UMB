import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { fromEvent, throttleTime, map, scan, filter, delay, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { CustumerService } from '../../services/custumer.service';
import { IProject } from '../../models/project.interface';
import {IProjectResponse} from '../../models/projectResponse.interface';
import { ICustomerResponse } from '../../models/customerResponse.interface';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.scss']
})
export class UpdateProjectComponent implements OnInit {

  ProjectLocalStorage: IProjectResponse = JSON.parse(localStorage.getItem('project')!);  
  exampleData: FormGroup | any;
  public idCustomer: string | any;
  public emailLocalStorage: string = JSON.parse(localStorage.getItem('user')!).email;
  public arrayOjectivesODS = ["Fin de la pobreza", "Hambre cero", "Salud y bienestar", "Educacion de calidad"
  , "Igualdad de genero", "Agua limpia y saneamiento", "Energía asequible y no contaminante"
  , "Trabajo decente y crecimiento economico", "Industria, innovacion e infraestructura"
  , "Reduccion de las desigualdades", "Ciudades y comunidades sostenibles"
  , "Produccion y consumo responsables", "Accion por el clima", "Vida submarina", "Vida de ecosistemas terrestres"
  , "Paz, justicia e instituciones solidas", "Alianzas para lograr los objetivos"];

  project_registration: FormGroup |any;

  constructor(
    private titleService: Title,
    public http: ProjectService,
    public httpCustomer: CustumerService,
    public router: Router
  ) {
  }

  ngOnInit(): void {
    //this.authService.isLoggedIn? this.authService.router.navigate(['home']):"";
    this.titleService.setTitle('CFWA | UPDATE PROJECT');
    document.body.classList.add('login-page');
    
    this.exampleData = new FormGroup({
      "id": new FormControl('', Validators.required),
      "projectName": new FormControl('', Validators.required),
      "idCreatorProject": new FormControl('', Validators.required),
      "description": new FormControl('', Validators.required),
      "total": new FormControl('', Validators.required),
      "categoryModel": new FormGroup({
        "id":new FormControl('', Validators.required),
        "type": new FormControl('', Validators.required),
        "description":new FormControl('', Validators.required),
        "imageCategory":new FormControl('', Validators.required),
      }),
      "status": new FormControl('true', Validators.required),
      "imageCategory":new FormControl('', Validators.required)
    });

    this.findIdCreatorProjectByEmail();
  }

  ngOnDestroy(): void {
    this.titleService.setTitle('');
    document.body.classList.remove('login-page');
    // 
  }

  defaultValueformProjectUpdate(projectResponse: IProjectResponse) {
    this.exampleData.patchValue({
      "id":projectResponse.id,
      "projectName": this.formatString(projectResponse.projectName),
      "idCreatorProject": projectResponse.idCreatorProject,
      "description": this.formatString(projectResponse.description),
      "total": projectResponse.total,
      "categoryModel": {
        "id":projectResponse.categoryModel.id,
        "type": projectResponse.categoryModel.type,
        "description":projectResponse.categoryModel.description,
        "imageCategory":projectResponse.categoryModel.imageCategory
      },
      "status": projectResponse.status,
      "imageCategory":projectResponse.categoryModel.imageCategory
    });
  }
  formatString(campo:string):string{
    return campo.charAt(0).toUpperCase() + campo.slice(1).toLowerCase();
  }


  findIdCreatorProjectByEmail() {    
    this.httpCustomer.findCustomerByEmail(this.emailLocalStorage)
      .subscribe(reponse => {
        this.idCustomer = reponse.id; 
        this.defaultValueformProjectUpdate(this.ProjectLocalStorage) ;      
      });
    
  }
  updateCustomer(form:IProject) {

    console.log("data", form);
    this.http.updateProject(form)
    .pipe(map((res) => {
      this.router.navigate(['profile']);
    }))
    .subscribe();
  }




}
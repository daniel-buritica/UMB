import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { fromEvent, throttleTime, map, scan, filter, delay, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { CustumerService } from '../../services/custumer.service';
import { IProject } from '../../models/project.interface';
import { ICustomerResponse } from '../../models/customerResponse.interface';
import { SubmitButtonPlaneComponent } from '../helpers/buttons/submit-button-plane/submit-button-plane.component';5


@Component({
  selector: 'app-register-project',
  templateUrl: './register-project.component.html',
  styleUrls: ['./register-project.component.scss']
})
export class RegisterProjectComponent implements OnInit {


  public idCustomer: string | any;
  public emailLocalStorage: string = JSON.parse(localStorage.getItem('user')!).email;
  public arrayOjectivesODS = ["Fin de la pobreza", "Hambre cero", "Salud y bienestar", "Educación de calidad"
    , "Igualdad de género", "Agua limpia y saneamiento", "Energía asequible y no contaminante"
    , "Trabajo decente y crecimiento económico", "Industria, innovación e infraestructura"
    , "Reducción de las desigualdades", "Ciudades y comunidades sostenibles"
    , "Producción y consumo responsables", "Acción por el clima", "Vida submarina", "Vida de ecosistemas terrestres"
    , "Paz, justicia e instituciones sólidas", "Alianzas para lograr los objetivos"];

  project_registration: FormGroup = new FormGroup({
    "projectName": new FormControl('', Validators.required),
    "idCreatorProject": new FormControl('', Validators.required),
    "description": new FormControl('', Validators.required),
    "total": new FormControl('', Validators.required),
    "categoryModel": new FormGroup({
      "type": new FormControl('', Validators.required)
    }),
    "status": new FormControl('true', Validators.required)
  });

  constructor(
    private titleService: Title,
    public http: ProjectService,
    public httpCustomer: CustumerService,
    public router: Router
  ) {
  }

  ngOnInit(): void {
    //this.authService.isLoggedIn? this.authService.router.navigate(['home']):"";
    this.titleService.setTitle('CFWA | REGISTER PROJECT');
    document.body.classList.add('login-page');
    this.findIdCreatorProjectByEmail();
  }

  ngOnDestroy(): void {
    this.titleService.setTitle('');
    document.body.classList.remove('login-page');
    // 
  }

  postCreateProject(form: IProject) {
    const formGroup = new FormGroup({
      "projectName": new FormControl(form.projectName, Validators.required),
      "idCreatorProject": new FormControl(this.idCustomer, Validators.required),
      "description": new FormControl(form.description, Validators.required),
      "total": new FormControl(form.total, Validators.required),
      "categoryModel": new FormGroup({
        "type": new FormControl(form.categoryModel.type, Validators.required)
      }),
      "status": new FormControl(form.status, Validators.required)
    });    
        
    this.http.createProject(formGroup.value as IProject)
      .pipe(map((res) => {        
        localStorage.setItem('project', JSON.stringify(res));        
        this.router.navigate(['PackageForm']);                
      }))
      .subscribe();
      

  }

  findIdCreatorProjectByEmail() {    
    this.httpCustomer.findCustomerByEmail(this.emailLocalStorage)
      .subscribe(reponse => {
        this.idCustomer = reponse.id;        
        
      });
    
  }







}
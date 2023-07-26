import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { fromEvent, throttleTime, map, scan, filter, delay, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { CustumerService } from '../../services/custumer.service';
import {PackageService  } from '../../services/package.service';
import { IProject } from '../../models/project.interface';
import { IPackage } from '../../models/package.interface';
import { ICustomerResponse } from '../../models/customerResponse.interface';
import {  IPackageResponse} from '../../models/packageResponse.interface';
import { SubmitButtonPlaneComponent } from '../helpers/buttons/submit-button-plane/submit-button-plane.component';

@Component({
  selector: 'app-package-form',
  templateUrl: './package-form.component.html',
  styleUrls: ['./package-form.component.scss']
})
export class PackageFormComponent implements OnInit {

  idProjectLocalStorage: string = JSON.parse(localStorage.getItem('project')!).id;  
  package_registration: FormGroup = new FormGroup({
    "packagee": new FormControl('', Validators.required),
    "description": new FormControl('', Validators.required),
    "price": new FormControl('', Validators.required),
    "idProject": new FormControl(this.idProjectLocalStorage, Validators.required)
  });
 
  constructor(
    private titleService: Title,
    public httpPackage: PackageService,
    public httpCustomer: CustumerService,
    public httpProject: ProjectService,
    public router: Router
    ){}
    

  ngOnInit(): void {
    //this.authService.isLoggedIn? this.authService.router.navigate(['home']):"";
    this.titleService.setTitle('CFWA | PACKAGE');
    document.body.classList.add('login-page');


   

  }
  ngOnDestroy(): void {
    this.titleService.setTitle('');
    document.body.classList.remove('login-page');
    // Elimine la clase personalizada al destruir el componente
  }

  postCreatePackage(form: IPackage) {
    console.log(form);

    this.httpPackage.createPackage(form)
      .pipe(
        delay(3000), // Esperar 10 segundos
        map((res) => {
          localStorage.setItem('project', 'null');
          this.router.navigate(['profile']);
        })
      )
      .subscribe();

    this.router.navigate(['PackageForm']);
  }
  

}

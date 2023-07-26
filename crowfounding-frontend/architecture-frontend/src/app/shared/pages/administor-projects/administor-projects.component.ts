import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../services/authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { fromEvent, throttleTime, map, scan, filter, delay } from 'rxjs';
import { Router } from '@angular/router';
import {IProjectResponse} from '../../models/projectResponse.interface';
import {ProjectService} from '../../services/project.service';
import { PopupViewProjectComponent } from '../helpers/popup-view-project/popup-view-project.component';


@Component({
  selector: 'app-administor-projects',
  templateUrl: './administor-projects.component.html',
  styleUrls: ['./administor-projects.component.scss']
})
export class AdministorProjectsComponent implements OnInit {
  
  listProject:IProjectResponse[] | undefined;
  constructor( private titleService: Title, 
    public authService: AuthService,
    private api:ProjectService,
    public router: Router) { }

  ngOnInit(): void {
    //this.authService.isLoggedIn? this.authService.router.navigate(['home']):"";
    this.titleService.setTitle('CFWA | ADMIN PROJECT');
    
    document.body.classList.add('login-page');
    this.api.findByAll().subscribe(response => {
      this.listProject = response;    
    })
    
  }
  ngOnDestroy(): void {
    this.titleService.setTitle('');
    
    document.body.classList.remove('login-page');
    
    // Elimine la clase personalizada al destruir el componente
  }
  deleteProject(event: Event, id: number): void {
    event.preventDefault(); // Evitar la acción predeterminada de recargar la página
    this.api.deleteProjectById(id).subscribe(() => {
      alert("proyecto eliminado con exito")  ;
      this.api.findByAll().subscribe(response => {
        this.listProject = response;    
      })
    }, error => {
      // Aquí puedes manejar el error en caso de que ocurra al eliminar la compra.
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/authentication.service';
import { Title } from '@angular/platform-browser';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { fromEvent, throttleTime, map, scan, filter, delay } from 'rxjs';
import { Router } from '@angular/router';
import {IProjectResponse} from '../../models/projectResponse.interface';
import {ProjectService} from '../../services/project.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listProject:IProjectResponse[] | undefined;

  constructor(
    public authService: AuthService,
    private titleService: Title,
    private api:ProjectService,
    public router: Router
  ) { }

  ngOnInit(): void {
    //this.authService.isLoggedIn? this.authService.router.navigate(['home']):"";
    this.titleService.setTitle('CFWA | HOME');

    // Llenar varaible listProject con los datos de la api
    this.api.findByAll().subscribe(response => {
      this.listProject = response;    
    })
    
  }
  ngOnDestroy(): void {
    this.titleService.setTitle('');
    // Elimine la clase personalizada al destruir el componente
  }

}

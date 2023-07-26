import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { fromEvent, throttleTime, map, scan, filter, delay } from 'rxjs';
import { Router } from '@angular/router';
import {IProjectResponse} from '../../models/projectResponse.interface';
import {ProjectService} from '../../services/project.service';
import{ProjectImagesComponent}from '../helpers/project-images/project-images.component'

@Component({
  selector: 'app-project-cards-seller',
  templateUrl: './project-cards-seller.component.html',
  styleUrls: ['./project-cards-seller.component.scss']
})
export class ProjectCardsSellerComponent implements OnInit {

  listProject:IProjectResponse[] | undefined;
  selectedProject: any; 
  constructor(
    public authService: AuthService,
    private api:ProjectService,
    public router: Router
  ) { }

  ngOnInit(): void {
    // Llenar varaible listProject con los datos de la api
    this.api.findByAll().subscribe(response => {
      this.listProject = response;    
    })
    
  }
  ngOnDestroy(): void {
  }
  isOpen: boolean = false;

  openModal(project:any) {
    this.selectedProject = project;
    localStorage.setItem('project',JSON.stringify(project));
    this.isOpen = true;
  }

}
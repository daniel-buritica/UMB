import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { fromEvent, throttleTime, map, scan, filter, delay } from 'rxjs';
import { Router } from '@angular/router';
import {IProjectResponse} from '../../models/projectResponse.interface';
import {ProjectService} from '../../services/project.service';
import { PopupViewProjectComponent } from '../helpers/popup-view-project/popup-view-project.component';
import{ProjectImagesComponent}from '../helpers/project-images/project-images.component';
import {SelectedProjectService} from '../../services/selected-project.service';


@Component({
  selector: 'app-project-cards',
  templateUrl: './project-cards.component.html',
  styleUrls: ['./project-cards.component.scss'],
})
export class ProjectCardsComponent implements OnInit {
  listProject:IProjectResponse[] | undefined;
  selectedProject: any; 
  selectedProjectId: number | null = null;
  constructor(
    public authService: AuthService,
    private api:ProjectService,
    public router: Router,
    private projectSelectionService: SelectedProjectService
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
    localStorage.setItem('project',JSON.stringify(project));
    this.isOpen = true;
    this.selectedProject = project;this.projectSelectionService.setSelectedProjectId(project.id);

  }

  

}
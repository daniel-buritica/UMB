import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { fromEvent, throttleTime, map, scan, filter, delay } from 'rxjs';
import { Router } from '@angular/router';
import {IProject} from '../../../models/project.interface';
import {ProjectService} from '../../../services/project.service';


@Component({
  selector: 'app-popup-view-project',
  templateUrl: './popup-view-project.component.html',
  styleUrls: ['./popup-view-project.component.scss']
})
export class PopupViewProjectComponent implements OnInit {
  
 listProject:IProject[] | undefined;
  constructor(
    private api:ProjectService,
    public router: Router) { }

  ngOnInit(): void {
       this.api.findByAll().subscribe(response => {
      this.listProject = response;    
    })
    
  }

}


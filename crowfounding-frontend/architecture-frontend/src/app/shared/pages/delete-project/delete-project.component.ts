import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {ProjectService} from '../../services/project.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-delete-project',
  templateUrl: './delete-project.component.html',
  styleUrls: ['./delete-project.component.scss']
})
export class DeleteProjectComponent implements OnInit {

  Idproject: number | any;

  constructor( private titleService: Title,
    private httpProject: ProjectService,
     private router: Router) { }

  ngOnInit(): void {
    //this.authService.isLoggedIn? this.authService.router.navigate(['home']):"";
    this.titleService.setTitle('CFWA | DELETE PROJECT');
    document.body.classList.add('login-page');
    this.Idproject = JSON.parse(localStorage.getItem('project')!).id;

    
  }
  ngOnDestroy(): void {
    this.titleService.setTitle('');
    
    document.body.classList.remove('login-page');
    
    // Elimine la clase personalizada al destruir el componente
  }

  deleteProject(id:number): void {
    this.httpProject.deleteProjectById(id).subscribe(() => {
      this.router.navigate(['/profile']);
      localStorage.removeItem('project');
    }, error => {
    });
  }
  

}

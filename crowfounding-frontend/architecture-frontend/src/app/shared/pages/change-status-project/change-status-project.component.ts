import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { StatusButtonComponent } from '../helpers/buttons/status-button/status-button.component';



@Component({
  selector: 'app-change-status-project',
  templateUrl: './change-status-project.component.html',
  styleUrls: ['./change-status-project.component.scss']
})
export class ChangeStatusProjectComponent implements OnInit {

  constructor( private titleService: Title) { }

  ngOnInit(): void {
    //this.authService.isLoggedIn? this.authService.router.navigate(['home']):"";
    this.titleService.setTitle('CFWA | STATUS PROJECT');
    document.body.classList.add('login-page');
    
  }
  ngOnDestroy(): void {
    this.titleService.setTitle('');
    
    document.body.classList.remove('login-page');
    
    // Elimine la clase personalizada al destruir el componente
  }

}

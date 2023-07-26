import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../../shared/services/authentication.service";
import { Title } from '@angular/platform-browser';
import { SubmitButtonPlaneComponent } from '../../shared/pages/helpers/buttons/submit-button-plane/submit-button-plane.component';

@Component({
  selector: 'app-rest-account',
  templateUrl: './rest-account.component.html',
  styleUrls: ['./rest-account.component.scss']
})
export class RestAccountComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public rouer : Router,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    //this.authService.isLoggedIn? this.authService.router.navigate(['home']):"";
    this.titleService.setTitle('CFWA | RECUPERAR CONTRASEÑA');
    
    document.body.classList.add('login-page');
    
  }
  ngOnDestroy(): void {
    this.titleService.setTitle('');
    
    document.body.classList.remove('login-page');
    
    // Elimine la clase personalizada al destruir el componente
  }

  login():void{
    this.rouer.navigate(['login'])
  }


}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/authentication.service';
import { Title } from '@angular/platform-browser';
import { SubmitButtonPlaneComponent } from '../../shared/pages/helpers/buttons/submit-button-plane/submit-button-plane.component';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userData: any;

  constructor(
    public authService: AuthService,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    //this.authService.isLoggedIn? this.authService.router.navigate(['home']):"";
    this.titleService.setTitle('CFWA | REGISTER');
    document.body.classList.add('login-page');
    
  }
  ngOnDestroy(): void {
    this.titleService.setTitle('');// Elimine la clase personalizada al destruir el componente    
    document.body.classList.remove('login-page');
  }

}

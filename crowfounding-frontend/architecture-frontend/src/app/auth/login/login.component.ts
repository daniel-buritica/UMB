import { Component, OnInit } from '@angular/core';
import { AuthService  } from '../../shared/services/authentication.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userData: any;

  constructor(
    public authService: AuthService,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    //this.authService.isLoggedIn? this.authService.router.navigate(['home']):"";
    this.titleService.setTitle('CFWA | LOGIN');
    document.body.classList.add('login-page');
  }
  ngOnDestroy(): void {
    this.titleService.setTitle('');
    document.body.classList.remove('login-page'); // Elimine la clase personalizada al destruir el componente
  }

}

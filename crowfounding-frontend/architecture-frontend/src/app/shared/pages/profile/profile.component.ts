import { Component, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

 
  constructor(private titleService: Title){}
    

  ngOnInit(): void {
    //this.authService.isLoggedIn? this.authService.router.navigate(['home']):"";
    this.titleService.setTitle('CFWA | PROFILE');
    document.body.classList.add('login-page');


   

  }
  ngOnDestroy(): void {
    this.titleService.setTitle('');
    document.body.classList.remove('login-page');
    // Elimine la clase personalizada al destruir el componente
  }

  

}

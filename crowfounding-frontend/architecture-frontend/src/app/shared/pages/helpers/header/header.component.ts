import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/authentication.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router:Router,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  login(){
    //this.router.navigate(['profile'])
  }


}

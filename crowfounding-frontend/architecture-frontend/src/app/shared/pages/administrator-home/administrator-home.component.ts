import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-administrator-home',
  templateUrl: './administrator-home.component.html',
  styleUrls: ['./administrator-home.component.scss']
})
export class AdministratorHomeComponent implements OnInit {


  constructor(
    private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('CFWA | ADMIN HOME');
    document.body.classList.add('login-page');
  }
  ngOnDestroy(): void {
    this.titleService.setTitle('');
    document.body.classList.remove('login-page');
    // 
  }

}


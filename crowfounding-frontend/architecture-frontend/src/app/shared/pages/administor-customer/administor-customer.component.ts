import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { fromEvent, throttleTime, map, scan, filter, delay } from 'rxjs';
import { Router } from '@angular/router';
import {ICustomerResponse} from '../../models/customerResponse.interface';
import {CustumerService} from '../../services/custumer.service';


@Component({
  selector: 'app-administor-customer',
  templateUrl: './administor-customer.component.html',
  styleUrls: ['./administor-customer.component.scss']
})
export class AdministorCustomerComponent implements OnInit {

  listCustomer:ICustomerResponse[] | undefined;

  constructor( private titleService: Title,
    private api:CustumerService,
    public router: Router) { }

  ngOnInit(): void {
    //this.authService.isLoggedIn? this.authService.router.navigate(['home']):"";
    this.titleService.setTitle('CFWA | ADMIN CUSTOMER');
    
    document.body.classList.add('login-page');
    this.api.findByAll().subscribe(response => {
      this.listCustomer = response;    
      console.log(response);
    })
    
  }
  ngOnDestroy(): void {
    this.titleService.setTitle('');
    
    document.body.classList.remove('login-page');
    
    // Elimine la clase personalizada al destruir el componente
  }
  deleteCustomer( event: Event, email: string): void {
    event.preventDefault(); // Evitar la acción predeterminada de recargar la página
    this.api.deleteCustomerByEmail(email).subscribe(() => {
      alert('usuario eliminado con exito');  
      this.api.findByAll().subscribe(response => {
        this.listCustomer = response;    
        console.log(response);
      }) 
    }, error => {
      // Aquí puedes manejar el error en caso de que ocurra al eliminar la compra.
    });
  }

}

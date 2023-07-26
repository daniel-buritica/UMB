import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CustumerService } from '../../services/custumer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.scss']
})
export class DeleteCustomerComponent implements OnInit, OnDestroy {
  email: string = '';

  constructor(
    private titleService: Title,
    private httpCustomer: CustumerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('CFWA | DELETE CUSTOMER');
    document.body.classList.add('login-page');
  }

  ngOnDestroy(): void {
    this.titleService.setTitle('');
    document.body.classList.remove('login-page');
  }

  deleteProject(): void {
    this.httpCustomer.deleteCustomerByEmail(this.email).subscribe(() => {
      this.router.navigate(['/login']);
      localStorage.setItem('user','null');
    }, error => {
    });
  }
}

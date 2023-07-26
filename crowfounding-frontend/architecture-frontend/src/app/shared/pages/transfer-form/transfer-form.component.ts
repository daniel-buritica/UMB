import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { fromEvent, throttleTime, map, scan, filter, delay, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { PaymentMethodService } from '../../services/payment-method.service';
import { ITransfer } from '../../models/transfer.interface';
import { ITransferResponse } from '../../models/transferResponse';
import { CustumerService } from '../../services/custumer.service';
import { ICustomerResponse } from '../../models/customerResponse.interface';
import { SubmitButtonPlaneComponent } from '../helpers/buttons/submit-button-plane/submit-button-plane.component';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.scss']
})
export class TransferFormComponent implements OnInit {

  public idCustomer: string | any;
  public emailLocalStorage: string = JSON.parse(localStorage.getItem('user')!).email;

  transfer_registration: FormGroup = new FormGroup({
    "paymentTypesModel": new FormGroup({
      "type": new FormControl('Cuenta de Ahorros', Validators.required),
    }),
    "idCreator": new FormControl('', Validators.required),
    "sourceAccount": new FormControl('', Validators.required),
    "destinationAccount": new FormControl('', Validators.required),
    "sourceName": new FormControl('', Validators.required),
    "destinationName": new FormControl('', Validators.required)
  });

  constructor(
    public httpPaymentMethod: PaymentMethodService,
    public httpCustomer: CustumerService,
    public router: Router) { }


  postCreateTransfer(form: ITransfer) {
     this.httpPaymentMethod.createPayment(form)
     .subscribe((response) => {
          // Guardar el resultado en el localStorage
          localStorage.setItem('paymentMethod', JSON.stringify(response));
   
        });
    }
  

  ngOnInit(): void {
    this.findIdCustomertByEmail();
  }
  
  findIdCustomertByEmail() {
    this.httpCustomer.findCustomerByEmail(this.emailLocalStorage)
      .subscribe(response => {
        this.idCustomer = response.id;
        this.transfer_registration.get('idCreator')?.setValue(this.idCustomer);
      });
  }
}

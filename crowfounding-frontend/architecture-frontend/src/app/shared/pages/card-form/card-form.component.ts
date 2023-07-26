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
import { CargarScriptsService } from '../../services/cargar-scripts.service';
import IMask from 'imask';



@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFromComponent implements OnInit {

  
  public idCustomer: string | any;
  public emailLocalStorage: string = JSON.parse(localStorage.getItem('user')!).email;

  card_registration: FormGroup = new FormGroup({
    "paymentTypesModel": new FormGroup({
      "type": new FormControl('Tarjeta de Credito', Validators.required),
    }),
    "idCreator": new FormControl('', Validators.required),
    "card": new FormControl('', Validators.required),
    "expirationDate": new FormControl('', Validators.required),
    "cvc": new FormControl('', Validators.required),
    "sourceName": new FormControl('', Validators.required)
    });


  constructor(private _CargaScripts:CargarScriptsService,
    public httpPaymentMethod: PaymentMethodService,
    public httpCustomer: CustumerService,
    public router: Router) 
  {_CargaScripts.Carga(["Cardform"]); }
  postCreateCard(form: ITransfer) {
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
       this.card_registration.get('idCreator')?.setValue(this.idCustomer);
     });
 }
  

}

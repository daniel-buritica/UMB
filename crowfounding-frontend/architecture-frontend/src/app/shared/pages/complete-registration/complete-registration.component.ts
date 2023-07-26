import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustumerService } from '../../services/custumer.service';
import { ICustomer } from '../../models/customer.interface';
import { fromEvent, throttleTime, map, scan, filter, delay } from 'rxjs';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import {AuthService} from '../../services/authentication.service';
import { SubmitButtonPlaneComponent } from '../helpers/buttons/submit-button-plane/submit-button-plane.component';


@Component({
  selector: 'app-complete-registration',
  templateUrl: './complete-registration.component.html',
  styleUrls: ['./complete-registration.component.scss']
})
export class CompleteRegistrationComponent implements OnInit {

  public emailLocalStorage: string = JSON.parse(localStorage.getItem('user')!)?.email;  
  public profilePictureLocalStorage: string = JSON.parse(localStorage.getItem('user')!)?.photoURL;  
  public arrayDocumentType = ['CC', 'CE', 'TI', 'PA'];
  public arrayUserType = ['Buyer','Seller'];
  public arrayContriesAndCities = [    { countries: 'Argentina', cities: ['Buenos Aires', 'Cordoba', 'Rosario'] },
  { countries: 'Bolivia', cities: ['La Paz', 'Santa Cruz de la Sierra', 'Cochabamba'] },
  { countries: 'Brasil', cities: ['Sao Paulo', 'Rio de Janeiro', 'Brasilia'] },
  { countries: 'Chile', cities: ['Santiago', 'Valparaiso', 'Concepcion'] },
  { countries: 'Colombia', cities: ['Bogota', 'Medellin', 'Cali'] },
  { countries: 'Costa Rica', cities: ['San Jose', 'Liberia', 'Puntarenas'] },
  { countries: 'Cuba', cities: ['La Habana', 'Santiago de Cuba', 'Camaguey'] },
  { countries: 'Ecuador', cities: ['Quito', 'Guayaquil', 'Cuenca'] },
  { countries: 'El Salvador', cities: ['San Salvador', 'Santa Ana', 'San Miguel'] },
  { countries: 'Guatemala', cities: ['Ciudad de Guatemala', 'Quetzaltenango', 'Escuintla'] },
  { countries: 'Haiti', cities: ['Puerto Principe', 'Cap-Haitien', 'Les Cayes'] },
  { countries: 'Honduras', cities: ['Tegucigalpa', 'San Pedro Sula', 'La Ceiba'] },
  { countries: 'Jamaica', cities: ['Kingston', 'Spanish Town', 'Montego Bay'] },
  { countries: 'Mexico', cities: ['Ciudad de Mexico', 'Guadalajara', 'Monterrey'] },
  { countries: 'Nicaragua', cities: ['Managua', 'Leon', 'Masaya'] },
  { countries: 'Panama', cities: ['Ciudad de Panama', 'Colon', 'David'] },
  { countries: 'Paraguay', cities: ['Asuncion', 'Ciudad del Este', 'San Lorenzo'] },
  { countries: 'Peru', cities: ['Lima', 'Arequipa', 'Trujillo'] },
  { countries: 'Puerto Rico', cities: ['San Juan', 'Bayamon', 'Carolina'] },
  { countries: 'Republica Dominicana', cities: ['Santo Domingo', 'Santiago', 'San Pedro de Macoris'] },
  { countries: 'Uruguay', cities: ['Montevideo', 'Salto', 'Paysandu'] },
  { countries: 'Venezuela', cities: ['Caracas', 'Maracaibo', 'Valencia'] }
];

 minimumAgeValidator(minAge: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const today = new Date();
    const birthDate = new Date(control.value);
    const age = today.getFullYear() - birthDate.getFullYear();

    if (age < minAge) {
      return { 'minimumAge': { 'requiredAge': minAge, 'actualAge': age } };
    }

    return null;
  };
}

  customer_registration: FormGroup = new FormGroup({
    "firstName": new FormControl('', Validators.required),
    "secondName": new FormControl('', Validators.required),
    "firstSurname": new FormControl('', Validators.required),
    "typeIdCardModel": new FormGroup({
      "type": new FormControl('', Validators.required),
    }),
    "idCard": new FormControl('', Validators.required),
    "email": new FormControl(this.emailLocalStorage, Validators.required),
    'cityModel': new FormGroup({
      'countryModel': new FormGroup({
        "country": new FormControl('', Validators.required),
        'indicatorCountryModel': new FormGroup({
          "indicator": new FormControl('', Validators.required),
        })
      }),
      "city": new FormControl('', Validators.required)
    }),
    "phone": new FormControl('', Validators.required),
    "rolModel": new FormGroup({
      "rol": new FormControl('', Validators.required),
    }),
    "dateBirth": new FormControl('', [Validators.required, this.minimumAgeValidator(18)]),
    "statusModel": new FormGroup({
      "id": new FormControl(1, Validators.required),
    }),
    "profilePicture": new FormControl(this.profilePictureLocalStorage, Validators.required)
  });

  constructor(
    public router: Router,
    public api: CustumerService,
    private titleService: Title,
    public authService:AuthService 
  ) {    
    
  }

  ngOnInit(): void {
    this.authService.isLoggedIn? '':this.router.navigate(['login']);
    this.titleService.setTitle('CFWA | REGISTER');
    document.body.classList.add('login-page');

  }
  ngOnDestroy(): void {
    this.titleService.setTitle('');
    // Elimine la clase personalizada al destruir el componente
    document.body.classList.remove('login-page');
  }

  postCompleteRegister(form: ICustomer) {

    this.api.createCustomer(form)
    .pipe(map((res) =>{
      this.customer_registration.reset();
      this.router.navigate(['home']);
    }))
      .subscribe();
  }

}

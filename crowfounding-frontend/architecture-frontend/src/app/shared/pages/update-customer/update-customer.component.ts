import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustumerService } from '../../services/custumer.service';
import { ICustomerUpdate } from '../../models/customerUpdate.interface';
import { fromEvent, throttleTime, map, scan, filter, delay } from 'rxjs';
import { Router } from '@angular/router';
import { ICustomerResponse } from '../../models/customerResponse.interface';



@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.scss']
})
export class UpdateCustomerComponent implements OnInit {

  exampleData: FormGroup | any;
  public emailLocalStorage: string = JSON.parse(localStorage.getItem('user')!).email;
  public arrayDocumentType = ['CC', 'CE', 'TI', 'PA'];
  public dataCustomer: ICustomerResponse | any;
  public arrayContriesAndCities = [{ countries: 'Argentina', cities: ['Buenos Aires', 'Cordoba', 'Rosario'] },
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

  constructor(
    private titleService: Title,
    public router: Router,
    public httpCustomer: CustumerService
  ) {
  }

  ngOnInit(): void {
    //this.authService.isLoggedIn? this.authService.router.navigate(['home']):"";
    this.titleService.setTitle('CFWA | UPDATE CUSTOMER');
    document.body.classList.add('login-page');

    // Ajustar valor por defecto formulario    
    this.exampleData = new FormGroup({
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
      "dateBirth": new FormControl('', Validators.required)
    });
    this.findCustomerByEmail();    
    
    

  }
  ngOnDestroy(): void {
    this.titleService.setTitle('');
    document.body.classList.remove('login-page');
    // 
  }

  findCustomerByEmail() {
    this.httpCustomer.findCustomerByEmail(this.emailLocalStorage)
      .subscribe(reponse => {
        this.dataCustomer = reponse;                
        this.defaultValueformCustomerUpdate(reponse);    
      });
  }

  defaultValueformCustomerUpdate(customerResponse: ICustomerResponse) {
    this.exampleData.patchValue({
      "firstName": this.formatString(customerResponse.firstName),
      "secondName": this.formatString(customerResponse.secondName),
      "firstSurname": this.formatString(customerResponse.firstSurname),
      "typeIdCardModel": {
        "type": customerResponse.typeIdCardModel.type,
      },
      "idCard": customerResponse.idCard,
      "email": customerResponse.email,
      'cityModel': {
        'countryModel':{
          'indicatorCountryModel': {
            "indicator": customerResponse.cityModel.countryModel.indicatorCountryModel.indicator,
          }
        },
        "city": customerResponse.cityModel.city
      },
      "phone": customerResponse.phone,
      "rolModel":{
        "rol": customerResponse.rolModel.rol,
      },
      "dateBirth": customerResponse.dateBirth,
    });
  }

  formatString(campo:string):string{
    return campo.charAt(0).toUpperCase() + campo.slice(1).toLowerCase();
  }
  updateCustomer(form:ICustomerUpdate) {

    console.log("data", form);
    this.httpCustomer.updateCustomer(form)
    .pipe(map((res) => {
      this.router.navigate(['home']);
    }))
    .subscribe();
  }
}

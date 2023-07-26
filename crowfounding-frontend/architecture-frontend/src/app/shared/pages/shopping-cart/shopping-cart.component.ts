import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardFromComponent } from '../card-form/card-form.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forkJoin, fromEvent, throttleTime, map, scan, filter, delay } from 'rxjs';
import { Router } from '@angular/router';
import { IPackageResponse } from '../../models/packageResponse.interface';
import { PackageService } from '../../services/package.service';
import { PaymentMethodService } from '../../services/payment-method.service';
import { CustumerService } from '../../services/custumer.service';
import { PurchaseOrderService } from '../../services/purchase-order.service';
import { IPurchase } from '../../models/purchase-order.interface';
import { IPurchaseResponse } from '../../models/purchase-orderResponse.interface';
import { ProjectService } from '../../services/project.service'
import { IProjectResponse } from '../../models/projectResponse.interface';
import { IPayment, IPurchaseBuild } from '../../models/purchase-orden-build.interface';
import { ITransferResponse } from '../../models/transferResponse';
import { ButtonCompleteOrderComponent } from '../../pages/helpers/buttons/button-complete-order/button-complete-order.component';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  listPurchase: IPurchaseResponse[] | undefined;
  idCustomer: string = '';
  public emailLocalStorage: string = JSON.parse(localStorage.getItem('user')!).email;
  listPackage2: IPackageResponse[] | undefined;
  objProject: { [id: number]: IProjectResponse } = {};

  paymentMethodP: ITransferResponse | any;

  listStringPackage: any = localStorage.getItem('listPackage2');
  listJsongPackage: any[] = JSON.parse(this.listStringPackage);
  listJsonPurchase: any[] = [];
  jsonPurchase: any;


  constructor(
    private titleService: Title,
    private httpPurchase: PurchaseOrderService,
    private httpCustomer: CustumerService,
    private httpProject: ProjectService,
    private httpPayment: PaymentMethodService,
    public router: Router
  ) { }

  public selectedPaymentType: string = 'creditCard';

  purchase_registration: FormGroup = new FormGroup({
    "paymentMethodModel": new FormGroup({
      "id": new FormControl('', Validators.required),
      "paymentTypesModel": new FormGroup({
        "type": new FormControl('Cuenta de Ahorros', Validators.required),
      }),
      "idCreator": new FormControl('', Validators.required),
      "sourceAccount": new FormControl('', Validators.required),
      "destinationAccount": new FormControl('', Validators.required),
      "sourceName": new FormControl('', Validators.required),
      "destinationName": new FormControl('', Validators.required)
    }),
    "packageModel": new FormGroup({
      "packagee": new FormControl('', Validators.required),
      "description": new FormControl('', Validators.required),
      "price": new FormControl('', Validators.required),
      "idProject": new FormControl('', Validators.required)
    }),
    "saleTime": new FormControl('', Validators.required),
    "status": new FormControl('', Validators.required),
    "idCustomer": new FormControl('', Validators.required),
  });

  ngOnInit(): void {    
    this.titleService.setTitle('CFWA | SHOPPING CART');
    document.body.classList.add('login-page');
    this.findIdCustomerByEmail(this.emailLocalStorage);    
    
    

    // Obtener listPackage2 del localStorage
    const listPackage2String = localStorage.getItem('listPackage2');
    if (listPackage2String) {
      this.listPackage2 = JSON.parse(listPackage2String);
      if (this.listPackage2) {
        const projectIds = this.listPackage2
          .map(purchase => purchase?.idProject)
          .filter(id => id !== undefined);
        this.getProjectPurchaseOrdenByIdCreator(projectIds);
      }
    }


    

    // Instanciar orden de compra 

    this.jsonPurchase = {
      paymentMethodModel: {
        id: 0,
        paymentTypesModel: {
          id: 0,
          type: '',
          description: ''
        },
        idCreator: 0,
        card: '',
        expirationDate: '',
        cvc: '',
        sourceAccount: 0,
        destinationAccount: 0,
        sourceName: '',
        destinationName: ''
      },
      packageModel: {
        id: 0,
        packagee: '',
        description: '',
        price: 0,
        idProject: 0
      },
      saleTime: '',
      status: true,
      idCustomer: 0
    };
  }

  ngOnDestroy(): void {
    this.titleService.setTitle('');
    document.body.classList.remove('login-page');
  }

  postCreatePurchase(form: IPurchase) {
    for (let i = 0; i < this.listJsonPurchase.length; i++) {
      this.httpPurchase.createPurchase(this.listJsonPurchase[i])
        .subscribe();
    }
  
    // Reiniciar la variable listPackage2 en el LocalStorage
    localStorage.setItem('listPackage2', JSON.stringify([]));
  }
  
 

  findIdCustomerByEmail(email:string) {    
    this.httpCustomer.findCustomerByEmail(email)      
      .subscribe(res =>{
        this.idCustomer = res.id;                
        this.getPaymentMethodByIdCreator(parseInt(this.idCustomer,10));
      });       
      
  }

  getPaymentMethodByIdCreator(id: number) {
    this.httpPayment.findByIdCreator(id)      
      .subscribe(res => {
        this.paymentMethodP = res[0];        
        this.BuildArrayPurchaseOrder(this.listJsongPackage, this.paymentMethodP);       
      });
  }

  getAllPurchaseOrdenByIdCreator(id: number) {
    this.httpPurchase.findAllPurchaseOrderByIdCreator(id)
      .pipe(
        map((res) => {
          this.listPurchase = res;
          const projectIds = this.listPurchase.map(purchase => purchase.packageModel.idProject);
          this.getProjectPurchaseOrdenByIdCreator(projectIds);
        })
      )
      .subscribe();
  }

  BuildArrayPurchaseOrder(list: Array<IPackageResponse>, payment: ITransferResponse) {

    for (var i = 0; i < list.length; i++) {
      this.jsonPurchase.packageModel.id = list[i].id;
      this.jsonPurchase.packageModel.packagee = list[i].packagee;
      this.jsonPurchase.packageModel.description = list[i].description;
      this.jsonPurchase.packageModel.price = list[i].price;
      this.jsonPurchase.packageModel.idProject = list[i].idProject;
      //metodos de pago 
      this.jsonPurchase.paymentMethodModel.id = payment.id;
      this.jsonPurchase.paymentMethodModel.paymentTypesModel.id = payment.paymentTypesModel.id;
      this.jsonPurchase.paymentMethodModel.paymentTypesModel.type = payment.paymentTypesModel.type;
      this.jsonPurchase.paymentMethodModel.paymentTypesModel.description = payment.paymentTypesModel.description;
      this.jsonPurchase.paymentMethodModel.idCreator = payment.idCreator;
      this.jsonPurchase.paymentMethodModel.card = payment.card;
      this.jsonPurchase.paymentMethodModel.expirationDate = payment.expirationDate;
      this.jsonPurchase.paymentMethodModel.cvc = payment.cvc;
      this.jsonPurchase.paymentMethodModel.sourceAccount = payment.sourceAccount;
      this.jsonPurchase.paymentMethodModel.destinationAccount = payment.destinationAccount;
      this.jsonPurchase.paymentMethodModel.sourceName = payment.sourceName;
      this.jsonPurchase.paymentMethodModel.destinationName = payment.destinationName;

      //otros
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      this.jsonPurchase.saleTime = `${hours}:${minutes}:${seconds}`;

      this.jsonPurchase.status = true;
      this.jsonPurchase.idCustomer = this.idCustomer;

      this.listJsonPurchase.push(this.jsonPurchase);
    }    
    console.log("DAtos de pago", JSON.stringify(this.listJsonPurchase));
  }


  getProjectPurchaseOrdenByIdCreator(projectIds: number[]) {
    const projectRequests = projectIds.map(id => this.httpProject.findProjectById(id));
    forkJoin(projectRequests)
      .subscribe((responses) => {
        responses.forEach((res, index) => {
          this.objProject[projectIds[index]] = res;
        });
      });
  }

  deletePurchase(event: Event, id: number): void {
    event.preventDefault(); // Evitar la acción predeterminada de recargar la página
    this.httpPurchase.deletePurchaseById(id).subscribe(() => {
      //this.getAllPurchaseOrdenByIdCreator(this.idCustomer);
    }, error => {
      // Aquí puedes manejar el error en caso de que ocurra al eliminar la compra.
    });
  }
}
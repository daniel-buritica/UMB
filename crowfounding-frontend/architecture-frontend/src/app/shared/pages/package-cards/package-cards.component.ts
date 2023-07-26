import { Component, OnInit,Input  } from '@angular/core';
import { AuthService } from '../../services/authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { fromEvent, throttleTime, map, scan, filter, delay } from 'rxjs';
import { Router } from '@angular/router';
import { IPackageResponse } from '../../models/packageResponse.interface';
import { PackageService } from '../../services/package.service';
import { SelectedProjectService } from '../../services/selected-project.service';
@Component({
  selector: 'app-package-cards',
  templateUrl: './package-cards.component.html',
  styleUrls: ['./package-cards.component.scss']
})
export class PackageCardsComponent implements OnInit {
  listPackage: IPackageResponse[] | undefined;
  purchaseorder: IPackageResponse | null = null;
  listPackage2: IPackageResponse[] = [];


   @Input() projectId: number | null = null;

   purchase_registration: FormGroup = new FormGroup({
    "paymentMethodModel": new FormGroup({
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
  
  constructor(
    public authService: AuthService,
    private api: PackageService,
    public router: Router,
    public projectSelectionService: SelectedProjectService
  ) {}
  

  ngOnInit(): void {
    this.projectSelectionService.selectedProjectId.subscribe(projectId => {
      if (projectId) {
        this.api.findByIdProject(projectId).subscribe(response => {
          this.listPackage = response;    
        });
      }
    });
  }

  ngOnDestroy(): void {}

  selectPackage(selectedPackage: IPackageResponse) {
    this.purchaseorder = selectedPackage;
    this.listPackage2?.push(selectedPackage);
    localStorage.setItem('listPackage2', JSON.stringify(this.listPackage2));
    console.log(this.listPackage2);
  }
  
  
  cualquiernombre(selectedPackage: IPackageResponse){
      
    this.purchase_registration.patchValue({
      "paymentMethodModel": {
        "paymentTypesModel": {
          "type": ''
        },
        "idCreator": '',
        "sourceAccount": '',
        "destinationAccount":'' ,
        "sourceName":'' ,
        "destinationName":'' 
      },
      "packageModel": {
        "packagee":selectedPackage.packagee,
        "description": selectedPackage.description,
        "price":selectedPackage.price,
        "idProject":selectedPackage.idProject
      },
      "saleTime":'',
      "status":'',
      "idCustomer": ''

    });
    console.log(this.purchase_registration.value);
  }
  
}

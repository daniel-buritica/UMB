import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from '../../../../services/cargar-scripts.service';

@Component({
  selector: 'app-button-complete-order',
  templateUrl: './button-complete-order.component.html',
  styleUrls: ['./button-complete-order.component.scss']
})
export class ButtonCompleteOrderComponent implements OnInit {

  constructor(private _CargaScripts:CargarScriptsService) 
  {_CargaScripts.Carga(["ButtonCompleteOrderAnimation"]) }


  ngOnInit(): void {
  }

}

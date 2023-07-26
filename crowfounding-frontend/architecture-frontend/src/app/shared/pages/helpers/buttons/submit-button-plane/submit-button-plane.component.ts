import { Component, AfterViewInit, Renderer2 } from '@angular/core';
import { CargarScriptsService } from '../../../../services/cargar-scripts.service';


@Component({
  selector: 'app-submit-button-plane',
  templateUrl: './submit-button-plane.component.html',
  styleUrls: ['./submit-button-plane.component.scss']
})
export class SubmitButtonPlaneComponent implements AfterViewInit  {
 
  constructor(private _CargaScripts:CargarScriptsService) 
  {_CargaScripts.Carga(["Submitbuttonanimation"]) }

  ngAfterViewInit() {
  }

}
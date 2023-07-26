import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public host: any;

  constructor() {
    // Inicializa la variable global aquí si es necesario
    this.host = 'a5e9cce4243ed4251b793c1c84080f98-1561464781.us-east-2.elb.amazonaws.com:80';
  }
}

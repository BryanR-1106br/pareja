import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  username:string = '';
  password:string = '';

  registerUser() {
    // Validar los campos y realizar el registro en JSON
    // ...
  }
}

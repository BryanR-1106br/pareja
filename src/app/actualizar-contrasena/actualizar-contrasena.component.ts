import { Component } from '@angular/core';

@Component({
  selector: 'app-actualizar-contrasena',
  templateUrl: './actualizar-contrasena.component.html',
  styleUrls: ['./actualizar-contrasena.component.css']
})
export class ActualizarContrasenaComponent {
  username:string = '';
  currentPassword:string = '';
  newPassword:string = '';

  updatePassword() {
    // Validar los campos y actualizar la contraseña en JSON
    // ...
  }
}

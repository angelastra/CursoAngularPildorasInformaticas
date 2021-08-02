import { Component } from '@angular/core';

//DECORADOR, LE DA FUNCIONALIDAD A LA CLASE DE ABAJO
@Component({
  selector: 'app-root', //NOMBRE DEL COMPONENTE, ES EL QUE SE PONE EN EL HTML PRINCIPAL
  templateUrl: './app.component.html', //LA VISTA DEL COMPONENTE
  styleUrls: ['./app.component.css'] //ESTILOS PARA LA VISTA DE ARRIBA
})
export class AppComponent {
  title = 'AprendiendoAngular';
}

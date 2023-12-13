import {Component} from '@angular/core';
import {interval, tap} from "rxjs";

export type Gender = 'male'|'female';

@Component({
  selector: 'app-uncommons-page',
  templateUrl: './uncommons-page.component.html',
  styleUrl: './uncommons-page.component.css'
})
export class UncommonsPageComponent {

  // i18n Select
  public name:string = 'Angular';
  public gender:string  = 'male';

  public invitationMap: { female: string; male: string } = {
    'male': 'invitarlo',
    'female': 'invitarla',
  };

  changeClient(){
    this.name = 'Angular cambio';
    this.gender  = 'female';
  }

  // i18n Plural
  public clients: string[] = ['Ana', 'Pedro', 'Fernando', 'Enrique', 'Eduardo'];
  public clientsMap= {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.',
  };

  deleteClient() {
    this.clients.shift();
  }

//   KeyValue
  public person = {
    bane:'Angular',
    Age: 34,
    address: 'Guanajuato, México'
  }

//   Async Pipe
  public myObservableTimer = interval(2000).pipe(
    tap(value => console.log('tap:', value))
  );
}

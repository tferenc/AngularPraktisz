import { Component } from '@angular/core';
import {ProductService} from './products/product.service';

@Component({
  selector: 'app-pm',
  template: `
  <div ><h1>{{pageTitle}}</h1>
    <app-products></app-products>
  </div>
  `,
  providers: [ ProductService ]
})

export class AppComponent {
  pageTitle: string = 'Acme Product Manager';
}

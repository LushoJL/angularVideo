import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button [style.borderColor]="isActive ? 'green' : 'white'">mi boton</button>
  `,
  styles: [
    `

    `
  ]
})
export class AppComponent {
  isActive =false;
}

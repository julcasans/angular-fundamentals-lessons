import { Component } from '@angular/core';
import { CardItemComponent } from './carditem.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardItemComponent],

  template: `
    <card-item />
    <card-item />
  `,
})
export class AppComponent {}

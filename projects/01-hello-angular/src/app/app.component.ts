import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1>Top 3</h1>
    <ol>
      <li>Lit</li>
      <li>Angular</li>
      <li>Vue</li>
    </ol>
  `,
  styles: `ol {
    list-style-type: upper-roman;
    }`,
})
export class AppComponent {}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../car';

@Component({
  selector: 'car-listing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- This article element represents and entire listing -->
    <article class="listing">
      <div class="image-parent">
        <img class="product-image" src="https://placehold.co/100x100" />
      </div>
      <section class="details">
        <p class="title">{{ car.make + ' ' + car.model }}</p>
        <hr />
        <p class="detail">
          <span>Year</span>
          <span>{{ car.year }}</span>
        </p>
        <div class="detail">
          <span>Transmission</span>
          <span>{{ car.transmission }}</span>
        </div>
        <p class="detail">
          <span>Mileage</span>
          <span>{{ car.miles }}</span>
        </p>
        <p class="detail">
          <span>Price</span>
          <span>{{ car.price }}</span>
        </p>
        <button class="save-button" (click)="saveClicked(car)">Save</button>
      </section>
    </article>
    <!-- end car listing markup -->
  `,
  styles: ``,
})
export class ListingComponent {
  @Input()
  car!: Car;
  @Output() saveClickedEvent = new EventEmitter<Car>();

  saveClicked(c: Car) {
    console.log('Save clicked', c);
    this.saveClickedEvent.emit(c);
  }
}

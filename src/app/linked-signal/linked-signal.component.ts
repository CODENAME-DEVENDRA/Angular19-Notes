import { Component, computed, linkedSignal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-linked-signal',
  imports: [FormsModule],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.scss',
})
export class LinkedSignalComponent {
  quantity = signal(2);
  price = 10;
  calculate() {
    this.quantity.set(5);
    console.log('Total Amount: ', this.totalAmount());
  }

  //Example of computed signal
  // totalAmount = computed(() => this.quantity() * this.price);

  //Example of linked signal
  // totalAmount = linkedSignal(() => this.quantity() * this.price);

  //Example of linked signal with source and compute function
  totalAmount = linkedSignal({
    source: this.quantity,
    computation: () => this.quantity() * this.price,
  });
}

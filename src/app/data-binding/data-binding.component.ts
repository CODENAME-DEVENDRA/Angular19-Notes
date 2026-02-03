import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss',
})
export class DataBindingComponent {
  //Interpolation Binding
  name: string = 'Devendra';
  age: number = 25;
  isLoggedIn: boolean = true;
  todayDate: Date = new Date();
  getUpperName(): string {
    return this.name.toUpperCase();
  }

  //Property Binding
  productName: string = 'iPhone 17 Pro';
  productImage: string =
    'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-finish-select-202509-6-9inch-cosmicorange?wid=5120&hei=2880&fmt=webp&qlt=90&.v=NUNzdzNKR0FJbmhKWm5YamRHb05tUzkyK3hWak1ybHhtWDkwUXVINFc0RnVrUzFnTVVSUnNLVnZUWUMxNTBGaGhsQTdPYWVGbmdIenAvNE9qYmZVYVFDb1F2RTNvUEVHRkpGaGtOSVFHak5NTEhXRE11VU1QNVo2eDJsWlpuWHQyaWthYXpzcEpXMExJLy9GTE9wWkNn&traceId=1';
  isOutOfStock: boolean = true;
  rating: number = 4;
  getPlaceholder() {
    return 'Buy ' + this.productName;
  }

  //Event Binding
  hoverMessage: string = '';
  inputText = '';

  onButtonClick() {
    alert('Button clicked!');
  }
  onMouseOver(): void {
    this.hoverMessage = 'Mouse is over the box!';
  }
  onMouseOut(): void {
    this.hoverMessage = 'Mouse is out of the box!';
  }
  onInputChange(event: any) {
    this.inputText = event.target.value;
  }
  onKeyPress(key: string) {
    console.log('Key pressed:', key);
    alert('You pressed: ' + key);
  }

  //Two-Way Binding
  selectedValue: string = 'React';
  inputValue: string = '';
  onSelectChange(event: any) {
    console.log('Selected value:', event.target.value);
    this.selectedValue = event.target.value;
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive-ngif-vs-if',
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directive-ngif-vs-if.component.html',
  styleUrl: './structural-directive-ngif-vs-if.component.scss',
})
export class StructuralDirectiveNgifVsIfComponent {
  isChecked: boolean = true;
  toggleCheckbox() {
    this.isChecked = !this.isChecked;
  }

  isInputVisible: boolean = true;
  showInput() {
    this.isInputVisible = true;
  }
  hideInput() {
    this.isInputVisible = false;
  }

  inputValue1: string = '';
  inputValue2: string = '';

  isLoggedIn = false;
  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}

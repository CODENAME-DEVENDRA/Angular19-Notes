import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directives',
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-directives.component.html',
  styleUrl: './attribute-directives.component.scss',
})
export class AttributeDirectivesComponent {
  //ngClass
  textColor = 'text-info';

  changeColor(color: string) {
    this.textColor = color;
  }

  isColorChange = false;

  // ngStyle
  styleColor = 'blue';
  updateColor(color: string) {
    this.styleColor = color;
  }

  isStyleChange = false;

  customClass: any = {
    color: 'green',
    border: '1px solid red',
  };
}

import {
  ChangeDetectionStrategy,
  Component,
  effect,
  signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush, //comment to check normal count change after 2 seconds in UI
})
export class SignalsComponent {
  //Example 1
  // Both are same
  // counter = signal(0);
  // counter: WritableSignal<number> = signal(0);
  // constructor() {
  //   this.counter.set(5);
  // }
  // incrementCounter() {
  //   this.counter.update((value) => value + 1);
  // }
  //Example 2
  // normalCount = 0;
  // count = signal(0);
  // check for normal count change after 2 seconds in UI, comment changeDetection strategy in @Component decorator
  // constructor() {
  //   this.count.set(5);
  //   setTimeout(() => {
  //     this.normalCount = 50;
  //     console.log('normal count after 2 seconds: ', this.normalCount);
  //   }, 2000);
  // }
  //check for count change after 2 seconds in UI
  // constructor() {
  //   this.count.set(5);
  //   setTimeout(() => {
  //     this.count.set(50);
  //     console.log('count after 2 seconds: ', this.count());
  //   }, 2000);
  // }
  // Example 3
  // value = signal(0);
  // constructor() {
  //   this.value.set(10);
  //   console.log('Value changed console w/o effect: ', this.value());
  //   effect(() => {
  //     console.log('in Value changed console with effect: ', this.value());
  //   });
  // }
  // onIncreaseValue() {
  //   this.value.update((v) => v + 1);
  // }
}

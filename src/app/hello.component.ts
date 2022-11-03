import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello </h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  a: any = [10, 11];
  b: any;

  suzuki: any = [
    { name: 'baleno', fuel: 'petrol', color: 'blue' },
    { name: 'brezza', fuel: 'diesel', color: 'white' },
    { name: 'grandVitara', fuel: 'diesel', color: 'red' },
  ];
  toyota: any;
  constructor() {
    //Section A

    console.log('a', this.a);
    console.log('b', this.b);

    //Section B

    console.log('a', this.a);
    console.log('b', this.b);

    console.log('suzuki ', this.suzuki);
    console.log('toyota ', this.toyota);

    //Section C

    console.log('suzuki ', this.suzuki);
    console.log('toyota ', this.toyota);
  }
}

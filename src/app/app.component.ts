import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
  ) { }
  isStaticImage = true;
  handleChange(event: Event) {
    event.preventDefault();
    this.isStaticImage = !this.isStaticImage;
  }

  handleBuy(event: Event) {
    event.preventDefault();
    console.log('Comprado!')
  }
}

import { Component } from '@angular/core';

@Component ({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>{{title}}</h1>
    <h2>{{hero}} details!</h2>
  </div>
  `
})

export class AppComponent {
  title = 'Tour of Heroes';
  hero = 'Windstorm';
}

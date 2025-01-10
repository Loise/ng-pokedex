import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <nav>
      <a routerLink="/">Home</a>
    </nav>
    <router-outlet />
    <a routerLink="">Back to home</a>
  `,
  styles: [],
})
export class AppComponent {
  title = 'ng-pokedex';
}

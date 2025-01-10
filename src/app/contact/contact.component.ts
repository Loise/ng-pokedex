import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  template: `
    <h2>Contact</h2>
    <label for="username">
      Username:
      <input id="username" type="text" [(ngModel)]="username" />
    </label>
    <label for="mail">
      Mail:
      <input id="mail" type="text" [(ngModel)]="mail" />
    </label>
    <button (click)="showResult()">Show Result</button>
  `,
  styles: ``
})
export class ContactComponent {
  username = '';
  mail = '';

  showResult() {
    alert(`Hello ${this.username}`);
  }
}

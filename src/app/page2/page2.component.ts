import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-page2',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component {

  submit() {
    // throw new Error('Method not implemented.');

    alert("Page 2 button clicked");

  }
}

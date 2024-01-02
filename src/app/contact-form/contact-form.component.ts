import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ButtonComponent } from '../button/button.component';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';



@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [MatFormFieldModule, MatIconModule, MatInputModule, ButtonComponent, ReactiveFormsModule, NgIf],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {

  isErr: boolean = false;
  name = new FormControl("", Validators.required);
  email = new FormControl("", [Validators.required, Validators.email]);
  phno = new FormControl("", Validators.required);
  message = new FormControl("", Validators.required);

  submit() {
    if (this.name.valid && this.email.valid && this.phno.valid && this.message.valid) {
      this.isErr = false;
      alert("Contact details are submitted.");
    } else {
      this.isErr = true;
    }
  }
}

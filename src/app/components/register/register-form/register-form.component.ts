import {
  Component,
  inject,
  Input,
  OnChanges,
  signal,
  SimpleChanges,
} from '@angular/core';
import { SharedService } from '../../../core/services/shared/shared.service';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { RegisterPayload } from '../../../core/model/class/Auth.class';

import { FormsModule } from '@angular/forms';

import { ValidationError } from '../../../core/model/interface/Validation.interface';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register-form',
  imports: [RouterLink, MatIconModule, FormsModule, NgIf],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
})
export class RegisterFormComponent implements OnChanges {
  @Input() payload: RegisterPayload = new RegisterPayload();
  @Input() register!: () => void;
  @Input() errorMessage: ValidationError | null = null;

  // Error Message Signals
  firstNameErr = signal<string>('');
  lastNameErr = signal<string>('');
  emailErr = signal<string>('');
  passwordErr = signal<string>('');
  passwordConfirmationErr = signal<string>('');

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['errorMessage'] && changes['errorMessage'].currentValue) {
      let errPath = changes['errorMessage'].currentValue;
      this.firstNameErr.set(errPath.errors?.first_name?.[0] || '');
      this.lastNameErr.set(errPath.errors?.last_name?.[0] || '');
      this.emailErr.set(errPath.errors?.email?.[0] || '');
      this.passwordErr.set(errPath.errors?.password?.[0] || '');
      this.passwordConfirmationErr.set(
        errPath.errors?.password_confirmation || ''
      );
    } else {
      this.firstNameErr.set('');
      this.lastNameErr.set('');
      this.emailErr.set('');
      this.passwordErr.set('');
      this.passwordConfirmationErr.set('');
    }
  }

  //Shared Service Visiblity Icon Functionality
  sharedService = inject(SharedService);
  is_passwordVisible = this.sharedService.is_passwordVisible;
  toggleVisibility = this.sharedService.toggleVisibility;

  //Password Confirmation Visiblity Icon Functionality
  is_ConfirmationVisible = signal<boolean>(false);
  toggle() {
    this.is_ConfirmationVisible.set(!this.is_ConfirmationVisible());
  }
}

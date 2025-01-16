import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SharedService } from '../../core/services/shared/shared.service';

import { RegisterFormComponent } from '../../components/register/register-form/register-form.component';
import { RegisterPayload } from '../../core/model/class/Auth.class';
import { AuthService } from '../../core/services/auth/auth.service';
import { AuthResponse } from '../../core/model/interface/Auth.interface';
import { LocalData } from '../../core/constant';
import { ValidationError } from '../../core/model/interface/Validation.interface';

@Component({
  selector: 'app-register',
  imports: [RegisterFormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerPayload: RegisterPayload = new RegisterPayload();
  authService = inject(AuthService);
  router = inject(Router);
  errMessage = signal<ValidationError | null>(null);

  registerUser() {
    this.authService.register(this.registerPayload).subscribe({
      next: (res: AuthResponse) => {
        localStorage.setItem(LocalData.token, res.token);
        this.router.navigateByUrl('my-todos');
      },
      error: (error) => {
        this.errMessage.set(error.error);
        console.log(error.error);
      },
    });
  }
}

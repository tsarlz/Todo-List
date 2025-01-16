import { Component, inject, signal } from '@angular/core';
import { LoginFormComponent } from '../../components/login/login-form/login-form.component';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../core/services/auth/auth.service';
import { LoginPayload } from '../../core/model/class/Auth.class';
import { AuthResponse } from '../../core/model/interface/Auth.interface';
import { ValidationError } from '../../core/model/interface/Validation.interface';
import { LocalData } from '../../core/constant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  authService = inject(AuthService); //For Login Functionality
  loginPayload: LoginPayload = new LoginPayload(); //Post Data of Log in
  errMassages = signal<ValidationError | null>(null);
  router = inject(Router);

  loginUser() {
    this.authService.login(this.loginPayload).subscribe({
      next: (res: AuthResponse) => {
        localStorage.setItem(LocalData.token, res.token);
        this.router.navigateByUrl('my-todos');
      },
      error: (error) => {
        this.errMassages.set(error.error);
        console.log(error.error);
      },
    });
  }
}

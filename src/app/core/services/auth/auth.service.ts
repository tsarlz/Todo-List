import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginPayload, RegisterPayload } from '../../model/class/Auth.class';
import { AuthResponse } from '../../model/interface/Auth.interface';
import { ApiEndpoint } from '../../constant';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);

  register(obj: RegisterPayload): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(ApiEndpoint.Auth.register, obj);
  }

  login(): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(ApiEndpoint.Auth.login, LoginPayload);
  }
}

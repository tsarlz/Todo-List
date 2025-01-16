import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  is_passwordVisible = signal<boolean>(false);

  toggleVisibility() {
    this.is_passwordVisible.set(!this.is_passwordVisible());
  }
}

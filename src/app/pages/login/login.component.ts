import { SharedService } from '../../core/services/shared/shared.service';
import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  imports: [RouterLink, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  //Shared Service Visiblity Icon Functionality
  sharedService = inject(SharedService);
  is_passwordVisible = this.sharedService.is_passwordVisible;
  toggleVisibility = this.sharedService.toggleVisibility;
}

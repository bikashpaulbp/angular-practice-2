import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  constructor(private router: Router, private authService: AuthService) {}

  email = new FormControl('', [Validators.required, Validators.email]);

  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  signUpGroup = new FormGroup({ email: this.email, password: this.password });

  onSignUp() {
    this.authService.register(
      this.signUpGroup.value.email!,
      this.signUpGroup.value.password!
    );
    // this.router.navigate(['/login']);
  }
}

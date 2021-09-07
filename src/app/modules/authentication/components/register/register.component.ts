import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SessionService } from '../../store/session.service';
import { Router } from '@angular/router';
import { createAuthenticationForm } from '../../store/session.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private sessionService: SessionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const registerFields = {
      username: '',
      email: '',
      password: '',
    };
    this.registerForm = createAuthenticationForm(
      registerFields,
      this.formBuilder
    );
  }

  public register(): void {
    this.sessionService
      .register(this.registerForm?.value)
      .subscribe((session) => {
        console.log(session);
        this.router.navigateByUrl('/');
      });
  }
}

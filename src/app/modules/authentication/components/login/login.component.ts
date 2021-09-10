import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { createAuthenticationForm } from '../../store/session.model';
import { SessionService } from '../../store/session.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AngularFireAuth,
    private sessionService: SessionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const loginFields = {
      identifier: '',
      password: '',
    };
    this.loginForm = createAuthenticationForm(loginFields, this.formBuilder);
  }

  public login(): void {
    this.sessionService.login(this.loginForm?.value).subscribe((session) => {
      console.log(session);
      this.router.navigateByUrl('/');
    });
  }
}

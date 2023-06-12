import {Component, OnInit} from '@angular/core';
import {TokenService} from '../../service/token.service';
import {AuthService} from '../../service/auth.service';
import {SignInForm} from '../../model/SignInForm';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {};
  hide = true;
  status = 'Please fill in the form to login!';
  signInForm: SignInForm;
  constructor(private tokenService: TokenService,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  login() {
    this.signInForm = new SignInForm(
      this.form.username,
      this.form.password
    )
    this.authService.signIn(this.signInForm).subscribe(data =>{
      // @ts-ignore
      if(data.status==202){
        this.status = 'Login Failed --> Please check your account!'
      } else {
        this.tokenService.setName(data.name);
        this.tokenService.setAvatar(data.avatar);
        this.tokenService.setToken(data.token);
        this.tokenService.setRole(data.roles);
        this.router.navigate(['']).then(()=>{
          window.location.reload();
        })
      }
    })
  }
}

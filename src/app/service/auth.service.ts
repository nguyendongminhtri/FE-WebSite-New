import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {SignUpForm} from '../model/SignUpForm';
import {Observable} from 'rxjs';
import {JwtResponse} from '../model/JwtResponse';
import {SignInForm} from '../model/SignInForm';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //API LOCAL
  // private API_REGISTER = environment.API_LOCAL + 'signup';
  // private API_SIGNIN = environment.API_LOCAL + 'signin';
  //API SERVER
  private API_REGISTER = environment.API_SERVER + 'signup';
  private API_SIGNIN = environment.API_SERVER + 'signin';
  constructor(private httpClient: HttpClient) {
  }

  signUp(signUpForm: SignUpForm): Observable<any> {
    return this.httpClient.post<any>(this.API_REGISTER, signUpForm);
  }
  signIn(signInForm: SignInForm): Observable<JwtResponse>{
    return this.httpClient.post<JwtResponse>(this.API_SIGNIN, signInForm);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
 
import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';
import { SignUpInfo } from './signup-info';
import { TokenStorageService } from './token-storage.service';
import { take, map } from 'rxjs/operators';
import * as jwt_decode from "jwt-decode";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private loginUrl = 'https://traficaccidentreport.herokuapp.com/api/auth/signin';
  private signupUrl = 'https://traficaccidentreport.herokuapp.com/api/auth/signup';
  public user: Observable<any>;
  private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;
 
  constructor(private http: HttpClient ,private tokenStorage: TokenStorageService) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
 
  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }
  login(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(`${this.loginUrl}/auth`, credentials,httpOptions).pipe(
      take(1),
      map(res => res['token']),
      map(token => {
        console.log(token);
        
        localStorage.setItem("authJwtToken",token);
        //this.locastore.store("users",token);
        
        return jwt_decode(token);
      })
    )
  }
  public get currentUserValue(): any {
    return this.currentUserSubject.value;
}
  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }
}
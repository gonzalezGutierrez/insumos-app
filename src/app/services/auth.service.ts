import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from './api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }


  authentification(auth) {
      return this.http.post(API.enpoint+'auth',{
        email:auth.email,
        password:auth.password
      });
  }
}

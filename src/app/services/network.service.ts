import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
    
    baseUrl = 'https://stark-tor-96627.herokuapp.com/api';
    constructor(private http:HttpClient) { }

    async networkApiGET(enpoint:string) {
        return await this.http.get(this.baseUrl+enpoint).toPromise();
    }
}

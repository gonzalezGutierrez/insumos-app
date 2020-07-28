import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from './api';

@Injectable({
    providedIn: 'root'
})
export class DepartamentoService {
    

    private route:string = 'departamentos';

    constructor(private http: HttpClient) { }

    async getDepartamentoCollection() {
        return await this.http.get(API.enpoint+this.route).toPromise();
    }
    async getDepartamentResource(departamentID: any) {
        return await this.http.get(API.enpoint+`${this.route}/${departamentID}`).toPromise();
    }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from './api';
import { IProduct } from '../structures/products';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private route: string = 'productos';
    constructor(private http: HttpClient){ }

    getProductsCollection() 
    {
        return this.http.get(API.enpoint+this.route,{headers:{},observe: 'response'});
    }
    async getProductResource(productId) 
    {
        return await this.http.get(API.enpoint + `${this.route}/${productId}`).toPromise();
    }
    async getProductsWithIdDepartament(params:any)
    {   
        return await this.http.get(API.enpoint+`departamentos/${params.id}/productos`).toPromise();
    }



}

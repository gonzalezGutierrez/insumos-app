import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from './api';

@Injectable({
  providedIn: 'root'
})
export class EntregaService {

    constructor(private http:HttpClient) { }

    async add(product_id:number, amount:number) {
        let entrega = this.getEntregaActual();
        return this.http.post(API.enpoint+'entregas',{
            entrega_id:entrega,
            product_id:product_id,
            amount:amount
        }).toPromise();
    }

    async getProducts() {
        let entrega = this.getEntregaActual();
        //console.log("entrega: ",entrega);
        let enpoint = API.enpoint+'entregas/'+entrega;
        console.log("Endp: ",enpoint);
        return this.http.get(enpoint).toPromise();
    }

    async endDelivery(departamento) {
        let entrega = this.getEntregaActual();
        return this.http.put(API.enpoint+`entregas/${entrega}`,{departament_id:departamento}).toPromise();
    }

    getEntregaActual(){
        return localStorage.getItem('entrega');
    }
    setEntregaActual(entrega_id)
    {
        localStorage.setItem('entrega',entrega_id);
    }
    removeEntregaActual()
    {
        localStorage.removeItem('entrega');
    }
}

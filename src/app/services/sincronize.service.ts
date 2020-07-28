import { Injectable } from '@angular/core';
import { IDepartament } from '../structures/departament';
import { Router } from '@angular/router';
import { DatabaseService } from './database.service';
import { IProduct } from '../structures/products';

@Injectable({
    providedIn: 'root'
})
export class SincronizeService {

    constructor(private db:DatabaseService, private router:Router) { }

    departamentToSqlite(departaments: IDepartament[]) {
        try {
            departaments.forEach(departament => {
                this.db.addDepartament(departament).then((res: any) => {
                    //alert("Los productos fueron sincronizados correctamente");
                }).catch(error => {
                    alert("Error: " + error.message);
                });;
            });
        } catch (error) {
            alert("Error: " + error.message);
        } finally {
            alert("Sincronizacuón exitosa");
        }

    }

    productsToSqlite(products: IProduct[]) {
        try {
            products.forEach(product => {
                this.db.addProduct(product).then((res: any) => {

                }).catch(error => {
                    alert("Error: " + error.message);
                });
            });
        } catch (error) {
            alert("Error: " + error.message);
        } finally {
            alert("Sincronizacuón exitosa");
            localStorage.setItem('sincronizacion-server', 'sincronizado');
            this.router.navigate(['/home']);
        }
    }
}

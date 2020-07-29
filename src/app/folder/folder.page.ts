import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../structures/products';
import { ProductService } from '../services/product.service';
import { DatabaseService } from '../services/database.service';

@Component({
    selector: 'app-folder',
    templateUrl: './folder.page.html',
    styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

    public folder: string;
    public product:IProduct = {id:3,name:"fake1",stock:10,departament:"name"};


    constructor(
        private activatedRoute: ActivatedRoute,
        private productS: ProductService,
        private db: DatabaseService,
        private router:Router
    ) { }

    ngOnInit() {
        this.folder = "offline";
    }

    public async onSincronize() {

        //obtener todas las entregas y productos de ellas

        try {

            let entregas = await this.db.loadDeliveries(1);

            entregas.forEach(entrega =>  {
                this.getProductsDelivery(entrega);
            });

        } catch (error) {
            alert("error: "+error.message);
        } finally {

        }

    }

    public async getProductsDelivery(entrega) {

        let products = await this.db.loadProductsOfDelivery(entrega.deliveryId);

        try {
            let response: any = await this.db.sendDeliveries(entrega.id, products);
            await this.db.endDelivery(entrega.deliveryId,entrega.id,2);
        } catch (error) {
            alert("Error: " + error.message);
        } finally {
            alert("La sincronización fue realizada con exito...");
            this.router.navigate(['sincronize']);
        }
    }
}

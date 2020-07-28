import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { NetworkConnectionService } from 'src/app/services/network-connection.service';
import { Observable } from 'rxjs';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
    selector: 'app-insumos',
    templateUrl: './insumos.page.html',
    styleUrls: ['./insumos.page.scss'],
})
export class InsumosPage implements OnInit {
    
    
    products: Observable<any[]>;
    constructor(private productS: ProductService,private db: DatabaseService) { }

    ngOnInit() {

        this.db.getDatabaseState().subscribe(rdy => {
            if (rdy) {
                alert("DB ready");
                this.products = this.db.getProducts();
            }
        });
        
    }

    public async getProducts() {
        this.productS.getProductsCollection().subscribe((res:any)=>{
            console.log(res.body.data);
            this.products = res.body.data;
        },(error)=>{
            if (error.status == 0) {
                console.log('No hay conexion con el servidor');
            }
        });
        
    }

}

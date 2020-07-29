import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EntregaService } from 'src/app/services/entrega.service';
import { ToastController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';
import { IProduct } from 'src/app/structures/products';

@Component({
    selector: 'app-insumo',
    templateUrl: './insumo.page.html',
    styleUrls: ['./insumo.page.scss'],
})
export class InsumoPage implements OnInit {

    params: any;
    product: IProduct = { id:0, name:'', stock:0, image:'', departament:'' };
    departament: any = [];
    public amount;

    constructor(
        private productS: ProductService,
        private router: ActivatedRoute,
        private route: Router,
        private entregaS: EntregaService,
        public toastController: ToastController,
        private db: DatabaseService
    ) { }

    ngOnInit() {
        this.params = this.router.snapshot.params;
        this.getProduct();
    }

    private async getProduct() {
        this.db.loadProductWithId(this.params.id).then(data=>{
            this.product = data;
        });
    }

    public async add() {

        let deliveryId = localStorage.getItem('delivery_id');
        await this.initial(deliveryId);

        deliveryId = localStorage.getItem('delivery_id');

        try {
            let result = await this.db.addProductoToDelivery(this.product.id,this.amount,deliveryId);

        } catch (error) {
            alert("Ha ocurrido un error agrendo el producto" + error.message);
        }finally{
            alert("Producto agregado correctamente");
            this.route.navigate(['/entrega']);
        }
    }

    public async initial(deliveryId) {
        if (deliveryId == null) {
            try {
                let result = await this.db.addDelivery();
                localStorage.setItem('delivery_id',result.insertId);
            } catch (error) {
                alert("Ha ocurrido un error" + error.message);
            }
        }

    }

    async presentToast() {
        const toast = await this.toastController.create({
            message: 'El producto fue agregado correctamente.',
            duration: 2000,
            color:'primary'
        });
        toast.present();
    }

}

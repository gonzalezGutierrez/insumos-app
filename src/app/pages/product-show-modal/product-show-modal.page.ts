import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ProductService } from 'src/app/services/product.service';

@Component({
    selector: 'app-product-show-modal',
    templateUrl: './product-show-modal.page.html',
    styleUrls: ['./product-show-modal.page.scss'],
})
export class ProductShowModalPage implements OnInit {

    //CORRESPONDE AL PRODUCTO ID 
    private modalParamsId:number;
    public product:any = [];
    constructor(
        private modalController: ModalController,
        private navParams: NavParams,
        private productS:ProductService
    ) { }

    ngOnInit() {
        this.modalParamsId = this.navParams.data.productId;
        this.getProduct();
    }
    async getProduct() {
        let response:any = await this.productS.getProductResource(this.modalParamsId);
        console.log(this.product)
        this.product = response.data;
    }

}

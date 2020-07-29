import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
    selector: 'app-entrega-detail',
    templateUrl: './entrega-detail.page.html',
    styleUrls: ['./entrega-detail.page.scss'],
})
export class EntregaDetailPage implements OnInit {

    public params;
    public products: any = [];
    public delivery: any = {};
    constructor(
        private routerNavigator: ActivatedRoute,
        private db:DatabaseService
    ) { }

    ngOnInit() {
        this.params = this.routerNavigator.snapshot.params.id;
        this.getProductsDelivery();
        this.getDelivery();
    }

    async getDelivery() {
        try {
            this.delivery = await this.db.loadDelivery(this.params);
        } catch (error) {
            alert("Error: "+error.message);
        }
    }

    private async getProductsDelivery() {
        try {
            this.products = await this.db.loadProductsOfDelivery(this.params);
        } catch (error) {
            alert("Error: " + error.message);
        }
    }

}

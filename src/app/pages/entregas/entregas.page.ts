import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
    selector: 'app-entregas',
    templateUrl: './entregas.page.html',
    styleUrls: ['./entregas.page.scss'],
})
export class EntregasPage implements OnInit {

    deliveries: any[];

    constructor(private db: DatabaseService) { }

    ngOnInit() {
        this.getDeliveries();
    }


    private async getDeliveries() {
        try {
            this.deliveries = await this.db.loadDeliveries(1);
        } catch (error) {
            alert(error.message);
        } finally {

        }
    }

}

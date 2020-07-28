import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { ActivatedRoute } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';
import { LoadingController } from '@ionic/angular';

import { ModalController } from '@ionic/angular';
import { ProductShowModalPage } from '../product-show-modal/product-show-modal.page';



@Component({
    selector: 'app-departamento-show',
    templateUrl: './departamento-show.page.html',
    styleUrls: ['./departamento-show.page.scss'],
})
export class DepartamentoShowPage implements OnInit {

    public departament: any = [];
    public products: any = [];

    displayedColumns: string[] = ['id', 'name','stock','add'];
    dataSource;
    dataset:boolean = false;
    dataReturned:any;

    constructor(
        private departamentS: DepartamentoService,
        private router: ActivatedRoute,
        private loading: LoadingController,
        private modalController: ModalController
    ) { }

    ngOnInit() {
        let departamentID = this.router.snapshot.params.id;
        this.getDepartament(departamentID);
    }

    async getDepartament(departamentID: any) {
        let loading = await  this.alertRequest('Obteniendo los productos');
        await loading.present();
        try {
            let response: any = await this.departamentS.getDepartamentResource(departamentID);
            this.departament = response.data;
            this.dataSource =  new MatTableDataSource(this.departament.products);
        } catch (error) {
            
        }finally{
            await loading.dismiss();
            this.dataset = true;
        }
    }

    async alertRequest(msg) {
        let loading = await this.loading.create({
            message:msg
        });
        return loading;
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    add(productId){
        this.openShowProductModal(productId);
    }

    async openShowProductModal(productId) {
        const modal = await this.modalController.create({
            component:ProductShowModalPage,
            componentProps:{
                'productId':productId
            }
        });

        modal.onDidDismiss().then((dataReturned)=>{
            this.dataReturned = dataReturned.data;
        });

        return await modal.present();

    }
}

import { Component, OnInit } from '@angular/core';
import { EntregaService } from 'src/app/services/entrega.service';
import { MenuController, ToastController } from '@ionic/angular';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.page.html',
  styleUrls: ['./entrega.page.scss'],
})
export class EntregaPage implements OnInit {

    public products:any = [];
    public departamentos:any = [];
    public departamento;
    constructor(
        private entregaS: EntregaService,
        private menu: MenuController,
        private  departamentS:DepartamentoService,
        public toastController: ToastController,
        private db: DatabaseService
    ){}

    ngOnInit() {
        
        this.getProducts();
        this.getDepartamentos();
    }

    async getDepartamentos() {

       
       
        /*let res:any = await this.departamentS.getDepartamentoCollection();
        this.departamentos = res.data;
        console.log(this.departamentos[0].area)*/
    }

    doRefresh(event) {
        setTimeout(() => {
          this.getProducts();
          event.target.complete();
        }, 2000);
    }

    async getProducts() 
    {
        let deliveryId = localStorage.getItem('delivery_id');
        alert(deliveryId);
        try {
            this.products = await this.db.loadProductsOfDelivery(deliveryId);
        } catch (error) {   
            alert("Error al cargar los productos de la entrega: "+error.message);
        }
    }

    async onEnd()
    {
        try{
            let res:any = await this.entregaS.endDelivery(this.departamento);
            this.entregaS.removeEntregaActual();
            console.log(localStorage.getItem('entrega'));
            this.presentToast();
            this.products = [];
        }catch(error){
            console.log(error);
        }
        
    }
    async presentToast() {
        const toast = await this.toastController.create({
            message: 'La entrega fue terminada con exito.',
            duration: 2000,
            color:'primary'
        });
        toast.present();
    }

}

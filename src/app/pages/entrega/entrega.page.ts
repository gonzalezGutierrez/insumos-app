import { Component, OnInit } from '@angular/core';
import { EntregaService } from 'src/app/services/entrega.service';
import { MenuController, ToastController } from '@ionic/angular';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { DatabaseService } from 'src/app/services/database.service';
import { IDepartament } from 'src/app/structures/departament';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.page.html',
  styleUrls: ['./entrega.page.scss'],
})
export class EntregaPage implements OnInit {

    public products:any = [];
    departamentos: IDepartament[] = [];
    public departamento;

    constructor(
        private entregaS: EntregaService,
        private menu: MenuController,
        public toastController: ToastController,
        private db: DatabaseService,
        private route: Router
    ){}

    ngOnInit() {

        this.getProducts();
        this.getDepartamentos();
    }

    async getDepartamentos() {
        this.db.getDatabaseState().subscribe(rdy => {
            if (rdy) {
                this.db.getDepartaments().subscribe(departamenst=>{
                   this.departamentos = departamenst;
               },(error)=>{
                   alert(error.message);
               })
            }
        });
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
        try {
            this.products = await this.db.loadProductsOfDelivery(deliveryId);
        } catch (error) {
            alert("Error al cargar los productos de la entrega: "+error.message);
        }
    }

    async onEnd()
    {
        try {
            let deliveryId = localStorage.getItem('delivery_id');
            let res = await this.db.endDelivery(deliveryId,this.departamento,1);
        }catch(error){
            alert(error.message);
        } finally {
            localStorage.removeItem('delivery_id');
            alert("La entrega fue terminada correctamente");
            this.route.navigate(['/entregas']);
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

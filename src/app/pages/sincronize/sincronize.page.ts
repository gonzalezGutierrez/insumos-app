import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/services/network.service';
import { SincronizeService } from 'src/app/services/sincronize.service';
import { IDepartament } from 'src/app/structures/departament';
import { IProduct } from 'src/app/structures/products';
import { Router } from '@angular/router';
import { ToastController,LoadingController  } from '@ionic/angular';

@Component({
    selector: 'app-sincronize',
    templateUrl: './sincronize.page.html',
    styleUrls: ['./sincronize.page.scss'],
})
export class SincronizePage implements OnInit {

    constructor(
        private network: NetworkService,
        private sinc: SincronizeService,
        private router: Router,
        public toastController: ToastController,
        public loadingController: LoadingController
    ) { }

    ngOnInit() {

        if (localStorage.getItem('sincronizacion-server') == 'sincronizado') {
            this.router.navigate(['/home']);
        }

    }

    async presentToast() {
        const toast = await this.toastController.create({
          message: 'Sincronización correcta',
          duration: 2000
        });
        toast.present();
    }

    async presentLoading() {
        const loading = await this.loadingController.create({
          cssClass: 'Sincronizando...',
          message: 'Espere un momento.',
          duration: 2000
        });
        await loading.present();

        const { role, data } = await loading.onDidDismiss();
        console.log('Loading dismissed!');
      }

    onSincronize() {
        this.presentLoading();
        try {
            this.network.networkApiGET('/departamentos').then((response: any) => {

                let departaments: IDepartament[] = [];
                let data = response.data;

                data.forEach(element => {
                    departaments.push({ id: element.id, name: element.area, encargado: element.responsable });
                });

                this.sinc.departamentToSqlite(departaments);

            }).catch(error => {
                alert("error: " + error.message);
            });

            this.network.networkApiGET('/productos').then((response: any) => {
                let products: IProduct[] = [];
                let data = response.data;
                data.forEach(element => {
                    products.push({ id: element.id, name: element.name, image: element.image, stock: element.stock, departament: element.departament.id });
                });
                this.sinc.productsToSqlite(products);
            }).catch(error => {
                alert("error: " + error.message);
            });
        } catch (error) {
            alert("Error: "+error.message);
        } finally {
            this.presentToast();
            localStorage.setItem('sincronizacion-server', 'sincronizado');
            this.router.navigate(['/home']);
        }


    }


}

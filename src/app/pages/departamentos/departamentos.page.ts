import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { LoadingController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';
import { IDepartament } from 'src/app/structures/departament';

@Component({
    selector: 'app-departamentos',
    templateUrl: './departamentos.page.html',
    styleUrls: ['./departamentos.page.scss'],
})
export class DepartamentosPage implements OnInit {

    departamentos: IDepartament[] = [];
    constructor(
        private departamentoS: DepartamentoService,
        private loading: LoadingController,
        private db: DatabaseService
    ) { }

    ngOnInit() {
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



}

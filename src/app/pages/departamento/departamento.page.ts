import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { ProductService } from 'src/app/services/product.service';
import { DatabaseService } from 'src/app/services/database.service';
import { IDepartament } from 'src/app/structures/departament';

@Component({
    selector: 'app-departamento',
    templateUrl: './departamento.page.html',
    styleUrls: ['./departamento.page.scss'],
})
export class DepartamentoPage implements OnInit {

    private params;
    public  products:any = [];
    public  departament: IDepartament = {id:'',name:'',encargado:''};
    
    constructor(
        private router: ActivatedRoute,
        private departamentoS:DepartamentoService,
        private productS: ProductService,
        private db: DatabaseService
    ) { }

    ngOnInit() {
        this.params = this.router.snapshot.params;

        this.getProducts();
        this.db.loadDepartament(this.params.id).then(data=>{
            this.departament = data;
        }).catch(error=>alert("Error: "+error.message));
    }

    private async getProducts()
    {
        this.db.loadProductsWithDepartamentId(this.params.id).then(products=>{
            this.products = products;
        }).catch(error=>alert(error.message));
    }

}

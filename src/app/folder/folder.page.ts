import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../structures/products';
import { ProductService } from '../services/product.service';

@Component({
    selector: 'app-folder',
    templateUrl: './folder.page.html',
    styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

    public folder: string;
    public product:IProduct = {id:3,name:"fake1",stock:10,departament:"name"};
   

    constructor(
        private activatedRoute: ActivatedRoute,
        private productS:ProductService
    ) { }

    ngOnInit() {
        this.folder = "offline";
    }

    public addProduct() {
        
    }
}

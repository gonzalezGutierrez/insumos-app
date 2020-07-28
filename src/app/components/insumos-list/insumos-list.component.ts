import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-insumos-list',
    templateUrl: './insumos-list.component.html',
    styleUrls: ['./insumos-list.component.scss'],
})
export class InsumosListComponent implements OnInit {
    
    @Input() products: any;
    constructor(private router:Router) { }

    ngOnInit() { }
    public routerDetailProduct(product_id) {
        this.router.navigate(['/insumo/' + product_id]);
    }

}

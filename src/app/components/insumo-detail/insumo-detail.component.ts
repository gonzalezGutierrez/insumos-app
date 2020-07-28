import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-insumo-detail',
    templateUrl: './insumo-detail.component.html',
    styleUrls: ['./insumo-detail.component.scss'],
})
export class InsumoDetailComponent implements OnInit {

    constructor(private router:Router) { }

    ngOnInit() { }

    
}

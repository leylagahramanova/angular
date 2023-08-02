import {Component, OnInit} from '@angular/core'
import {IProduct} from './models/product'
import {ProductsService} from './services/products.service'
import { Observable, tap } from 'rxjs'
import { ModalService } from './services/modal.service'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md'; // Import the MDBBootstrapModule

@Component ({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.scss', ]
})
export class AppComponent {
    banner: { img: string }; 
    title = 'angular app'
    // loading=false
    term:''
    // // products$:Observable<IProduct[]>
    // constructor (public productsService: ProductsService,
    //     public modalservices:ModalService) {
    // }
    // ngOnInit(): void {
    //     this.loading =true
    //     // this.products$=this.productsService.getAll().pipe(
    //     //     tap(()=>this.loading=false)
    //     // )
    //     this.productsService.getAll().subscribe(()=>{
    //         this.loading=false
    //     })
    // }
}


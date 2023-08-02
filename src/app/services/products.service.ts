import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http'
import{catchError, throwError, delay,retry, Observable, tap} from 'rxjs'
import {IProduct} from '../models/product'
import {ErrorService} from './error.service'
@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    getProductDetails(productId: any) {
      throw new Error('Method not implemented.')
    }
    constructor(private http: HttpClient,
        private  errorService:ErrorService) {
    }
    products:IProduct[]=[]
    getAll(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {  
            params:new HttpParams({    
                fromObject:{limit:5}
            })
}).pipe(delay(2000),
retry(2),
tap(products=>this.products=products),
catchError(this.errorHandler.bind(this)))
    }
    private errorHandler(error:HttpErrorResponse){
        this.errorService.handle(error.message)
        return throwError(()=>error.message)
    }
    create(product: IProduct):Observable<IProduct>{
        return this.http.post<IProduct>('https://fakestoreapi.com/products', product)
        .pipe(
            tap(prod=>
                this.products.push(prod)
       ))
    }
}
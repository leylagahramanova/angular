import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe((res: any)=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

}
// import { Component, OnInit, ChangeDetectorRef   } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { ModalService } from 'src/app/services/modal.service';
// import { ProductsService } from 'src/app/services/products.service';
// import { ReactiveFormsModule } from '@angular/forms'; 
// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.scss']
// })
// export class CartComponent implements OnInit {
//   product: any = {
//     imageURL: '', // You can set a default or leave it empty
//     // Other product properties...
//   };
//   constructor(private productService: ProductsService, 
//     private modalService: ModalService,
//     private cdRef: ChangeDetectorRef
//     ) {}

//   form = new FormGroup({
//     title: new FormControl<string>('', [Validators.required, Validators.minLength(6)]),
//     price: new FormControl<number>(0, [Validators.required]),
//     description: new FormControl<string>('', [Validators.required, Validators.minLength(6)]),
//     image: new FormControl<string | File | null>(null),
//     category: new FormControl<string>('')
//   });

//   get title() {
//     return this.form.controls.title as FormControl;
//   }
//   get price() {
//     return this.form.controls.price as FormControl;
//   }
//   get description() {
//     return this.form.controls.description as FormControl;
//   }
//   get image() {
//     return this.form.controls.image as FormControl;
//   }
//   get category() {
//     return this.form.controls.category as FormControl;
//   }

//   url: string | null = null; // Use null instead of an empty string
//   isImageLoaded = false; // Flag to indicate if the image is loaded
//   selectFile(event: Event) {
//     const input = event.target as HTMLInputElement;
//     if (input?.files) {
//       const file = input.files[0];
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = (event: any) => {
//         this.form.patchValue({
//           image: file
//         });
//         this.url = event.target.result;
//         this.isImageLoaded = true; // Set the flag to true when the image is loaded
//         this.cdRef.detectChanges(); // Trigger change detection manually
//       };
//     }
//   }
  
//   ngOnInit(): void {}

//   submit() {
//     console.log(this.form.value);
//     this.productService.create({
//       title: this.title.value as string,
//       price: this.price.value as number,
//       description: this.description.value as string,
//       image: this.image.value as File,
//       category: this.category.value as string,

//     }).subscribe(() => {
//       this.modalService.close();
//     });
//   }
// }
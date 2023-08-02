import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.scss'],
})
export class ProductComponent {
  @Input() product: IProduct;
  details = false;

  constructor(private cartService: CartService) {}

  addtocart(item: IProduct) {
    // Assuming the item has an 'id', 'image', 'title', 'price', 'description', and 'total' property
    const productToAdd: IProduct = {
      id: item.id,
      image: item.image,
      title: item.title,
      price: item.price,
      category:item.category,
      description: item.description,
      total: item.price, // Assuming the total starts with the product's price for one item
    };

    this.cartService.addtoCart(productToAdd);
  }
}





import { Component, OnInit } from '@angular/core';
import { Product } from 'app/@AppService/models/products/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = []
  constructor() {
    Array(5).fill('').map((_, i) => {
      this.products.push({ id: i, name: `Product 00 ${i + 1}` })
    })
    console.log(this.products);

  }

  ngOnInit(): void {
  }

}

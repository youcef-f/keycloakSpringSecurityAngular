import {Component, OnInit} from '@angular/core';
import {Product} from './classes/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: Product[] = [];

  constructor() {
  }

  ngOnInit(): void {

    this.products = [
      new Product(1, 'Computer HP 54', 765),
      new Product(2, 'Printer LX ER', 12300),
      new Product(3, 'Smart Phone Sumsung 50', 1254)
    ];

  }

}

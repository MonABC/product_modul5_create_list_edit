import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: ' anh binh',
      price: 1000,
      description: 'hang zin'
    },
    {
      id: 2,
      name: 'thang',
      price: 1000,
      description: 'hang nat'
    },
    {
      id: 3,
      name: 'viet',
      price: 1000,
      description: 'trai chua mo nut'
    }
  ];

  isFormCreateProduct = false;
  isFormEditedProduct = false;
  currentProduct: Product = {};

  changeState() {
    this.isFormCreateProduct = !this.isFormCreateProduct;
  }

  changeStateEditForm(product) {
    this.isFormEditedProduct = !this.isFormEditedProduct;
    // lấy ra thằng product hiện tại
    this.currentProduct = product;
  }

  constructor() {
  }

  ngOnInit() {
  }


  editProduct(product) {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == product.id) {
        index = i;
        break;
      }
    }
    this.products[index] = product;
  }
}

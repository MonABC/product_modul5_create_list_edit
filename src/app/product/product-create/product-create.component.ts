import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = {};
  formCreateProduct: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
    price: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required])
  })

  constructor() {
  }
  ngOnInit() {
  }

  createProduct(productForm) {
    if (productForm.valid) {
      console.log(productForm.value);
    } else {
      alert('xay ra loi!')
    }

  }
  get idCreateControl() {
  return this.formCreateProduct.get('id')
  };
  get nameCreateControl() {
    return this.formCreateProduct.get('name')
  };
  get priceCreateControl() {
    return this.formCreateProduct.get('price')
  };
  get descriptionControl() {
    return this.formCreateProduct.get('description')
  }

}

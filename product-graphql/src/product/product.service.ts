import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import {Product} from "./entities/product.entity";
import {BuyProductInput} from "./dto/buy-product.input";

@Injectable()
export class ProductService {

  products: Product[] = [];

  buyProducts: BuyProductInput[] = [];

  constructor() {
    this.products.push({id: 1, price: '123.12', name: 'mango'});
    this.products.push({id: 2, price: '133.12', name: 'grape'});
    this.products.push({id: 3, price: '223.12', name: 'orange'});

    this.buyProducts.push({productId: 1, buyerId: 1});
    this.buyProducts.push({productId: 2, buyerId: 1});
  }

  create(createProductInput: CreateProductInput) {
    const product = new Product();
    product.id = createProductInput.id;
    product.name = createProductInput.name;
    product.price = createProductInput.price;
    this.products.push(product);
    return product;
  }

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find(value => value.id === id);
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    const product = this.products.find(value => value.id === id);
    if (updateProductInput.name) {product.name = updateProductInput.name}
    if (updateProductInput.price) {product.price = updateProductInput.price}
    return product;
  }

  remove(id: number) {
    const product = this.products.find(value => value.id === id);
    this.products = this.products.filter(value => value.id !== id);
    return product;
  }

  findProductsByUserId(personId: number) {
    const result = this.buyProducts.filter(buyProduct => buyProduct.buyerId === personId)
        .flatMap(buyProduct => this.products.filter(product => buyProduct.productId === product.id));
    return result;
  }

  buy(buyProductInput: BuyProductInput) {
    const product = this.products.find(value => value.id === buyProductInput.productId);
    if (product) {
      this.buyProducts.push(buyProductInput);
      return product;
    } else {
      throw new Error(`Product ID ${buyProductInput.productId} does not exists`)
    }
  }
}

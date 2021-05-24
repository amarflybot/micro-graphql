import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
import {PersonResolver} from "./person.resolver";

@Module({
  providers: [ProductResolver, PersonResolver, ProductService]
})
export class ProductModule {}

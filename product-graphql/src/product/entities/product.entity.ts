import {ObjectType, Field, Int, Directive} from '@nestjs/graphql';
import {Person} from "./person.entity";

@ObjectType()
@Directive('@key(fields: "id")')
export class Product {

  @Field(() => Int, { description: 'Product Id', nullable: false })
  id: number;

  @Field(() => String, { description: 'Product Name' })
  name: string;

  @Field(() => String, { description: 'Product Price' })
  price: string;

}

import {CreateProductInput} from './create-product.input';
import {Field, InputType, PartialType} from '@nestjs/graphql';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {

  @Field(() => String, { description: 'Product Name' })
  name: string;

  @Field(() => String, { description: 'Product Price' })
  price: string;

}

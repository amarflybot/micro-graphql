import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {

  @Field(() => Int, { description: 'Product Id' })
  id: number;

  @Field(() => String, { description: 'Product Name' })
  name: string;

  @Field(() => String, { description: 'Product Price' })
  price: string;

}

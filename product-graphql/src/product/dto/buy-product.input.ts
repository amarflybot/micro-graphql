import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class BuyProductInput {

  @Field(() => Int, { description: 'Product Id' })
  productId: number;

  @Field(() => Int, { description: 'Person Id who bought' })
  buyerId: number;

}

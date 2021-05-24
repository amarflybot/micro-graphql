import {InputType, Int, Field, ID} from '@nestjs/graphql';

@InputType()
export class CreatePersonInput {
  @Field(() => Int, { description: 'ID of the person' })
  id: number;

  @Field(() => String, { description: 'Name of the person' })
  name: string;
}

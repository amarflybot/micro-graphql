import {ObjectType, Field, ID, Int, Directive} from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class Person {
  @Field(() => Int, { description: 'Id', nullable: false })
  id: number;

  @Field(() => String, { description: 'name' })
  name: string;
}

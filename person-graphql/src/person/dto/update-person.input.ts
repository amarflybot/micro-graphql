import {CreatePersonInput} from './create-person.input';
import {Field, InputType, PartialType} from '@nestjs/graphql';

@InputType()
export class UpdatePersonInput extends PartialType(CreatePersonInput) {
  @Field(() => String)
  name: string;
}

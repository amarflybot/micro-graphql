import {Parent, ResolveField, Resolver} from '@nestjs/graphql';
import {ProductService} from './product.service';
import {Product} from './entities/product.entity';
import {Person} from "./entities/person.entity";

@Resolver(() => Person)
export class PersonResolver {
  constructor(private readonly productService: ProductService) {}

  @ResolveField((of) => [Product])
  public recentPurchases(@Parent() person: Person): Product[] {
    return this.productService.findProductsByUserId(person.id);
  }
}

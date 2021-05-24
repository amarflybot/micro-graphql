import {Directive, Field, Int, ObjectType} from "@nestjs/graphql";
import {Product} from "./product.entity";

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class Person {
    @Field((type) => Int)
    @Directive('@external')
    id: number;

    @Field((type) => [Product])
    recentPurchases?: Product[];
}

import {Module} from '@nestjs/common';
import {GraphQLFederationModule} from '@nestjs/graphql';
import {ProductModule} from './product/product.module';
import {Person} from "./product/entities/person.entity";

@Module({
  imports: [GraphQLFederationModule.forRoot({
  autoSchemaFile: true,
    buildSchemaOptions: {
      orphanedTypes: [Person],
    },
  playground: true,
  }),ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

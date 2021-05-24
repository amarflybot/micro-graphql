import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { PersonModule } from './person/person.module';

@Module({
  imports: [GraphQLFederationModule.forRoot({
    autoSchemaFile: true,
    playground: true,
  }),PersonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

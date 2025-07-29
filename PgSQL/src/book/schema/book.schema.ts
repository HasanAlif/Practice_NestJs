import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType() // This decorator marks the class as a GraphQL object type
// The Book class represents a book entity in the GraphQL schema
export class Book { // This class defines the structure of a book object
  // The Book class contains fields that will be exposed in the GraphQL API
  @Field((type) => Int) // The @Field decorator marks this property as a GraphQL field
  // The type is specified as Int, indicating that this field is an integer
  id: number;

  @Field()
  title: string;

  @Field((type) => Int)
  price: number;
}

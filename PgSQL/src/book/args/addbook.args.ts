import { Field, InputType, Int } from "@nestjs/graphql";


@InputType() // This decorator marks the class as a GraphQL input type
// The AddBookArgs class is used to define the input arguments for adding a new book
export class AddBookArgs { // This class contains fields that will be used to create a new book entity
  // The AddBookArgs class contains properties that map to the fields of a book entity
  @Field()
  title: string;

  @Field((type) => Int)
  price: number;

}
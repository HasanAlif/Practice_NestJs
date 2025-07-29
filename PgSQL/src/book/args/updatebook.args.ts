import { Field, InputType, Int } from '@nestjs/graphql';

@InputType() // This decorator marks the class as a GraphQL input type
// The UpdateBookArgs class is used to define the input arguments for updating a book
export class UpdateBookArgs { // This class contains fields that will be used to update a book entity
  // The UpdateBookArgs class contains properties that map to the fields of a book entity
  @Field((type) => Int) // The @Field decorator marks this property as a GraphQL field
  // The type is specified as Int, indicating that this field is an integer
  id: number;

  @Field()
  title: string;

  @Field((type) => Int)
  price: number;
}

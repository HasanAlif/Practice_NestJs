import { Query, Resolver } from "@nestjs/graphql";


@Resolver(of => String) // Define a GraphQL resolver for the application
export class AppResolver { // This resolver handles GraphQL queries

    @Query(returns => String) // Define a GraphQL query that returns a string
    index(): string {
        return "Welcome to the GraphQL API!";
    }
}
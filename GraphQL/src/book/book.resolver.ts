import { Query, Resolver } from "@nestjs/graphql";
import { Book } from "./schema/book.schema";
import { BookService } from "./book.service";
import { Book as BookModel } from "../graphql";

@Resolver(of => Book)
export class BookResolver {
    constructor(private readonly bookService: BookService) {}

    @Query(returns => [Book])
    getAllBooks(): BookModel[] {
        return this.bookService.findAllBooks();
    }
}
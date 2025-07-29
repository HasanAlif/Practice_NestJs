import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from './schema/book.schema';
import { BookService } from './book.service';
import { AddBookArgs } from './args/addbook.args';
import { UpdateBookArgs } from './args/updatebook.args';

@Resolver((of) => Book) // Define a GraphQL resolver for the Book entity
export class BookResolver { // This resolver handles GraphQL queries and mutations related to books
  // The BookResolver is responsible for handling GraphQL operations related to books
  constructor(private readonly bookService: BookService) {} // Inject the BookService to perform operations on books

  @Query((returns) => [Book], { name: 'books' }) // Define a GraphQL query to get all books
  // This query returns an array of Book objects
  getAllBooks() {
    return this.bookService.findAllBooks(); // Call the BookService to retrieve all books
  }

  @Query((returns) => Book, { name: 'bookById' }) // Define a GraphQL query to get a book by its ID
  // This query returns a single Book object based on the provided ID
  getBookById(@Args('id', { type: () => Int }) id: number) {
    return this.bookService.findBookById(id); // Call the BookService to retrieve a book by its ID
  }

  @Mutation((returns) => String, { name: 'deleteBook' }) // Define a GraphQL mutation to delete a book by its ID
  // This mutation returns a success message after deleting the book
  deleteBookById(@Args({ name: 'bookId', type: () => Int }) id: number) {
    return this.bookService.deleteBook(id); // Call the BookService to delete a book by its ID
  }

  @Mutation((returns) => String, { name: 'addBook' }) // Define a GraphQL mutation to add a new book
  // This mutation takes AddBookArgs as input and returns a success message
  addBook(@Args('addBookArgs') addBookArgs: AddBookArgs) {
    return this.bookService.addBook(addBookArgs); // Call the BookService to add a new book with the provided arguments
  }

  @Mutation((returns) => String, { name: 'updateBook' }) // Define a GraphQL mutation to update an existing book
  // This mutation takes UpdateBookArgs as input and returns a success message
  updateBook(@Args('updateBookArgs') updateBookArgs: UpdateBookArgs) {
    return this.bookService.updateBook(updateBookArgs); // Call the BookService to update an existing book with the provided arguments
  }
}

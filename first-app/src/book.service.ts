import { Injectable } from "@nestjs/common";


@Injectable()// This line imports the Injectable decorator from the @nestjs/common package, which is used to mark a class as a provider that can be injected into other classes.
export class BookService {// This line defines a class named BookService, which will handle book-related operations such as adding, deleting, updating, and finding books. The class is decorated with the @Injectable decorator, indicating that it can be injected into other classes as a dependency.

    addBook(): string {
        return "Book added successfully";
    }// This method adds a book and returns a success message.

    deleteBook(): string {
        return "Book deleted successfully";
    }// This method deletes a book and returns a success message.

    updateBook(): string {
        return "Book updated successfully";
    }// This method updates a book and returns a success message.

    findAllBooks(): string {
        return "All books retrieved successfully";
    }// This method retrieves all books and returns a success message.

    findBookById(id: string): string {
        return `Book with ID ${id} retrieved successfully`;
    }// This method retrieves a book by its ID and returns a success message, including the ID of the book.
    // Note: In a real application, these methods would likely interact with a database or other data source to perform the actual operations.
}
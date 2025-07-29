import { Injectable, NotFoundException } from '@nestjs/common';
import { BookEntity } from './entity/book.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AddBookArgs } from './args/addbook.args';
import { UpdateBookArgs } from './args/updatebook.args';

@Injectable()
export class BookService { // This service handles business logic related to books
  // The BookService is responsible for managing book entities, including CRUD operations
  constructor( // Inject the BookEntity repository to perform database operations
    @InjectRepository(BookEntity) // Inject the TypeORM repository for BookEntity
    public readonly bookRepo: Repository<BookEntity>, // Repository for BookEntity to perform CRUD operations
  ) {} // Constructor to initialize the service with the book repository

  async findAllBooks(): Promise<BookEntity[]> { // This method retrieves all books from the database
    // It returns a promise that resolves to an array of BookEntity objects
    let books = await this.bookRepo.find(); // Find all books in the database
    return books;
  }

  async findBookById(id: number): Promise<BookEntity> { // This method retrieves a book by its ID
    // It returns a promise that resolves to a BookEntity object
    let book = await this.bookRepo.findOne({ where: { id: id } }); // Find a book by its ID
    // If the book is not found, throw a NotFoundException
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return book;
  }

  async deleteBook(id: number): Promise<string> { // This method deletes a book by its ID
    // It returns a promise that resolves to a success message
    await this.bookRepo.delete(id); // Delete the book with the specified ID
    return `Book with ID ${id} deleted successfully`;
  }

  async addBook(addBookArgs: AddBookArgs): Promise<string> { // This method adds a new book to the database
    // It takes AddBookArgs as an argument and returns a promise that resolves to a success
    let book: BookEntity = new BookEntity(); // Create a new instance of BookEntity
    // Set the properties of the book entity from the AddBookArgs
    book.title = addBookArgs.title;
    book.price = addBookArgs.price;
    await this.bookRepo.save(book); // Save the book entity to the database
    return `Book with Title ${book.title} added successfully`;
  }

  async updateBook(updateBookArgs: UpdateBookArgs): Promise<string> { // This method updates an existing book in the database
    // It takes UpdateBookArgs as an argument and returns a promise that resolves to a success
    let book: BookEntity | null = await this.bookRepo.findOne({ // Find the book by its ID
      where: { id: updateBookArgs.id },
    });
    if (!book) {
      throw new NotFoundException(
        `Book with ID ${updateBookArgs.id} not found`,
      );
    } // If the book is found, update its properties
    book.title = updateBookArgs.title;
    book.price = updateBookArgs.price;
    await this.bookRepo.save(book); // Save the updated book entity to the database
    return `Book with ID ${updateBookArgs.id} updated successfully`;
  }
}

import { Body, Controller, Delete, Get, Param, ParseBoolPipe, Post, Put } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./data/book.dto";
import { BookPipe } from "./pipes/book.pipe";


@Controller('book')
export class BookController {

    constructor(private bookService : BookService) {}

    @Get("/findAll")
    getAllBooks() : Book[] {
        return this.bookService.findAllBooks();
    }

    @Put("/update")
    updateBook(@Body()book : Book): string {
        return this.bookService.updateBookService(book);
    }

    @Delete("/delete/:id")
    deleteBook(@Param("id") bookId : string): string {
        return this.bookService.deleteBookService(bookId);
    }

    @Post("/add")
    addBook(@Body(new BookPipe()) book: Book): string {
        return this.bookService.addBookService(book);
    }

    @Get("/:id")
    findBookById(@Param("id",ParseBoolPipe) id: number): string {
        console.log(id, typeof id);
        return "book with id " + id + " found";
    }
}
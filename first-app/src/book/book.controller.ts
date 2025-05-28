import { BadRequestException, Body, Controller, Delete, Get, Param, ParseBoolPipe, Post, Put, UseFilters, UseGuards, ValidationPipe } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./data/book.dto";
import { BookDto } from "./dto/book.dto";
import { BookException } from "./book.exception";
import { BookCustomExceptionFilter } from "./book.exception.filter";
import { BookGuard } from "./book.guard";


@Controller('book')
export class BookController {

    constructor(private bookService : BookService) {}

    @Get("/findAll")
    @UseGuards(new BookGuard())
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

    @Post("addbook")
    AddBook(@Body() book: Book): string {
        return this.bookService.addBookService(book);
    }

    @Post("/add")
    addBook(@Body(new ValidationPipe()) book: BookDto): string {
        return this.bookService.addBookServiceWithId(book);
    }

    @Get("/:id")
    findBookById(@Param("id",ParseBoolPipe) id: number): string {
        console.log(id, typeof id);
        return "book with id " + id + " found";
    }

    @Get("")
    @UseFilters(BookCustomExceptionFilter)
    helloBookApi(): string {
        throw new BadRequestException();
    }
}
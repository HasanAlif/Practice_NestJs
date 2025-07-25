import { Injectable } from "@nestjs/common";
import { BookEntity } from "./entity/book.entity";



@Injectable()
export class BookService {
    public booksData: BookEntity[] = [];

    addBook(book: BookEntity): string {
        this.booksData.push(book);
        return `Book with title ${book.title} added successfully!`;
    }

    updateBook(id: number, updateBook: BookEntity): string {
        for (let x = 0; x < this.booksData.length; x++) {
            if (this.booksData[x].id === id) {
                this.booksData[x] = updateBook;
            }
        }
        return `Book with id ${id} updated successfully!`;
    }

    deleteBook(id: number) {
        this.booksData = this.booksData.filter(book => book.id !== id);
        return `Book with id ${id} deleted successfully!`;
    }

    findBookById(id: number): BookEntity | undefined {
        for (let x = 0; x < this.booksData.length; x++) {
            if (this.booksData[x].id === id) {
                return this.booksData[x];
            }
        }
        return undefined;
    }

    findAllBooks(): BookEntity[] {
        return this.booksData;
    }
}
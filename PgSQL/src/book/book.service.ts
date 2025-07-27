import { Injectable, NotFoundException } from '@nestjs/common';
import { BookEntity } from './entity/book.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookEntity)
    public readonly bookRepo: Repository<BookEntity>,
  ) {}

  async findAllBooks(): Promise<BookEntity[]> {
    let books = await this.bookRepo.find();
    return books;
  }

  async findBookById(id: number): Promise<BookEntity> {
    let book = await this.bookRepo.findOne({ where: { id: id } });
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return book;
  }

  async deleteBook(id: number): Promise<string>{
    await this.bookRepo.delete(id);
    return `Book with ID ${id} deleted successfully`;
  }
}

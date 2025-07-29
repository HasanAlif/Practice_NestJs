import { Module } from '@nestjs/common';
import { BookEntity } from './entity/book.entity';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { BookService } from './book.service';
import { BookResolver } from './book.resolver';


@Module({ // This module handles book-related functionality
  imports: [TypeOrmModule.forFeature([BookEntity])], // Import the TypeORM module for the BookEntity
  // This allows the BookService to perform CRUD operations on BookEntity
  controllers: [],
  providers: [BookService, BookResolver], // Provide the BookService and BookResolver for dependency injection
})
export class BookModule {}

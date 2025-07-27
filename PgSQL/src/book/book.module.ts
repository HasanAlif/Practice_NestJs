import { Module } from '@nestjs/common';
import { BookEntity } from './entity/book.entity';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { BookService } from './book.service';


@Module({
  imports: [TypeOrmModule.forFeature([BookEntity])],
  controllers: [],
  providers: [BookService],
})
export class BookModule {}

import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { BookService } from "./book.service";
import { BookController } from "./book.controller";
import { BookMiddleware } from "./book.middleware";

@Module({
    imports: [],
    controllers: [BookController],
    providers: [BookService],
    exports: [],
})

export class BookModule implements NestModule{
    configure(consumer: MiddlewareConsumer){
        consumer.apply(BookMiddleware).forRoutes('book');
        // Apply the BookMiddleware to all routes under 'book'
    }
}
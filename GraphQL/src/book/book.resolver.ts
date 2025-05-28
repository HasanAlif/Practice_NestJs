import { Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class BookResolver {

    @Query("books")
    getAllBooks() {
        return[
            {id:1, title: "Book One", price:455},
            {id:2, title: "Book Two", price:480},
            {id:3, title: "Book Three", price:550},
            {id:4, title: "Book Four", price:380},
            {id:5, title: "Book Five", price:400},
        ];
    }
}
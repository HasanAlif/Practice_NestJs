import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";// This line imports the Controller decorator from the @nestjs/common package, which is used to define a controller in a NestJS application.



@Controller("book")// This line defines a controller for the "book" route. The controller will handle incoming requests to the "/book" endpoint.
// The Controller decorator is used to mark a class as a NestJS controller, which can handle incoming requests and return responses.
export class BookController{

    @Post("/add")// This line defines a POST route for adding a book. The @Post decorator is used to specify that this method will handle POST requests to the "/book/add" endpoint.
    adBook() :string {
        return "Book added successfully";
    }

    @Delete("/delete")// This line defines a DELETE route for deleting a book. The @Delete decorator is used to specify that this method will handle DELETE requests to the "/book/delete" endpoint.
    deleteBook() :string {
        return "Book deleted successfully";
    }

    @Put("/update")// This line defines a PUT route for updating a book. The @Put decorator is used to specify that this method will handle PUT requests to the "/book/update" endpoint.
    updateBook() :string {
        return "Book updated successfully";
    }

    @Get("/findAll")// This line defines a GET route for finding all books. The @Get decorator is used to specify that this method will handle GET requests to the "/book/find" endpoint.
    findAllBooks() :string {
        return "All books retrieved successfully";
    }

    @Get("/find/:id")// This line defines a GET route for finding a book by its ID. The ":id" part of the route is a route parameter that can be used to pass the ID of the book to be retrieved.
    findBookById(@Param() params) :string {
        // The @Param decorator is used to extract the route parameters from the request. In this case, it extracts the "id" parameter from the URL.
        return `Book with ID ${params.id} retrieved successfully`;
    }
}
import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";// This line imports the Controller decorator from the @nestjs/common package, which is used to define a controller in a NestJS application.
import { BookService } from "./book.service";



@Controller("book")// This line defines a controller for the "book" route. The controller will handle incoming requests to the "/book" endpoint.
// The Controller decorator is used to mark a class as a NestJS controller, which can handle incoming requests and return responses.
export class BookController{// This line defines a class named BookController, which will handle requests related to books. The class is decorated with the @Controller decorator, indicating that it is a controller in the NestJS framework.


    constructor(private bookService: BookService){// This line defines a constructor for the BookController class. The constructor is called when an instance of the class is created.
    // The constructor can be used to initialize any dependencies or perform setup tasks for the controller.
    

    }

    @Post("/add")// This line defines a POST route for adding a book. The @Post decorator is used to specify that this method will handle POST requests to the "/book/add" endpoint.
    addBook() :string {
       return this.bookService.addBook();// This line calls the addBook method of the BookService instance and returns its result. The addBook method is expected to handle the logic for adding a book and return a success message.
    }

    @Delete("/delete")// This line defines a DELETE route for deleting a book. The @Delete decorator is used to specify that this method will handle DELETE requests to the "/book/delete" endpoint.
    deleteBook() :string {
        return this.bookService.deleteBook();// This line calls the deleteBook method of the BookService instance and returns its result. The deleteBook method is expected to handle the logic for deleting a book and return a success message.
    }

    @Put("/update")// This line defines a PUT route for updating a book. The @Put decorator is used to specify that this method will handle PUT requests to the "/book/update" endpoint.
    updateBook() :string {
        return this.bookService.updateBook();// This line calls the updateBook method of the BookService instance and returns its result. The updateBook method is expected to handle the logic for updating a book and return a success message.
    }

    @Get("/findAll")// This line defines a GET route for finding all books. The @Get decorator is used to specify that this method will handle GET requests to the "/book/find" endpoint.
    findAllBooks() :string {
        return this.bookService.findAllBooks();// This line calls the findAllBooks method of the BookService instance and returns its result. The findAllBooks method is expected to handle the logic for retrieving all books and return a success message.
    }

    @Get("/find/:id")// This line defines a GET route for finding a book by its ID. The ":id" part of the route is a route parameter that can be used to pass the ID of the book to be retrieved.
    findBookById(@Param() params) :string {
        // The @Param decorator is used to extract the route parameters from the request. In this case, it extracts the "id" parameter from the URL.
        return this.bookService.findBookById(params.id);// This line calls the findBookById method of the BookService instance, passing the extracted ID as an argument. The findBookById method is expected to handle the logic for retrieving a book by its ID and return a success message.
    }
}
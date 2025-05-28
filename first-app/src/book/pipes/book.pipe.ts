import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";



// This pipe can be used to transform or validate the data before it reaches the controller
// It can be applied to specific routes or globally in the application
export class BookPipe implements PipeTransform {
    transform(value:any,metadata:ArgumentMetadata): any {
        // This method is called automatically by NestJS when a request is made to a route that uses this pipe
        if(value.id == 1) return value; // If the id is 1, return the value as is
        // Otherwise, you can perform some transformation or validation
        else throw new BadRequestException(`Invalid book id: ${value.id}. Only id 1 is allowed.`); // Throw an exception if the id is not 1
        return value.id == 1;
    }
    
}
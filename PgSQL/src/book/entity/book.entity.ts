import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'book' }) // This decorator marks the class as a TypeORM entity
// The BookEntity class represents a book entity in the database
export class BookEntity { // This class defines the structure of a book entity
  // The BookEntity class contains properties that map to the database columns
  @PrimaryGeneratedColumn() // This decorator marks the property as the primary key and auto-generates its value
  // The id property is the unique identifier for each book entity
  id: number;

  @Column() // This decorator marks the property as a column in the database
  title: string; // The title property represents the title of the book

  @Column() 
  price: number; // The price property represents the price of the book
}

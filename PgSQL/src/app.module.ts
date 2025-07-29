import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppResolver } from './app.resolver';
import { ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from './book/book.module';

@Module({ // This is the root module of the application
  // The AppModule imports necessary modules and provides services and resolvers
  imports: [
    GraphQLModule.forRoot({ // Configure the GraphQL module
      driver: ApolloDriver, // Use ApolloDriver for GraphQL
      playground: true, // Enable GraphQL playground for testing queries
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'), // Automatically generate the schema file
      definitions: { // Generate TypeScript definitions for the GraphQL schema
        path: join(process.cwd(), 'src/graphql.ts'), // Path to the generated TypeScript definitions
      }, // Enable GraphQL playground and generate schema file
    }), // GraphQL module configuration
    TypeOrmModule.forRoot({ // Configure TypeORM for database connection
      // This configuration connects to a PostgreSQL database
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Alif',
      database: 'book_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }), // TypeORM module configuration
    BookModule // Import the BookModule for handling book-related functionality
  ],
  controllers: [],
  providers: [AppService, AppResolver], // Provide the AppService and AppResolver for dependency injection
})
export class AppModule {}

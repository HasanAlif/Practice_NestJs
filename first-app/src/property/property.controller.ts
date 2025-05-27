import {  Body, Controller, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Query } from '@nestjs/common';

@Controller('property')
export class PropertyController {
    @Get()
    findAll() {
        return "All properties";
    }

    @Get(':id')
    findOne(@Param('id',ParseIntPipe) id, @Query('sort', ParseBoolPipe) sort) {

        console.log(typeof id); // number
        console.log(typeof sort); // boolean

        return `Property with ID: ${id}`;

    }

    @Post()
    create(@Body() body) {
        console.log('Creating property with data:', body);
        return "Property created";
    }
}

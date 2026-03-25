import { Controller, Get, Post } from '@nestjs/common';
import { ProductService }  from '';
//import { createProductDto } from '';
@Controller() 
export class ProductController {
    constructor (private readonly productsService : ProductService ){}
       @Get()
        findAll(){
            return this.productsService.findAll();
        }
    
        @Get()
        findOne(){
            return this.productsService
        }
        //@Post()
        //create(createProductDto: CreateProductDto){

        //}
}
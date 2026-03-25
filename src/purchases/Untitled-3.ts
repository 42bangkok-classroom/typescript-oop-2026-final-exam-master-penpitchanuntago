import {Get, Injectable} from '@nestjs/common' 
import {Product } from './purchese'
@Injectable()
export class ProductService {
    constructor (private readonly products : Product[]  ){}

    @Get()
    findAll(){
        return this.products
    }
    @Get()
    findOne(){
        return 
    }

} 
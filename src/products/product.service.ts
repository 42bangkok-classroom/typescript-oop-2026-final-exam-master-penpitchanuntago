import {Get, Injectable} from '@nestjs/common' 
import {Product } from './product.interface'
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
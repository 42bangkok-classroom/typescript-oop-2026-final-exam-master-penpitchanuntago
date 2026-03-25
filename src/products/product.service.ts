import {Injectable} from '@nestjs/common' 
import {Product} from '../products'
@Injectable()
export class ProductService {
    constructor (private readonly products : Product  ){}
    getallProduct(){
     return 
    }
}
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Category, Product } from '../dbmodels/category-products';
import {User} from '../dbmodels/user';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users:User[] = [
      { id:12, userId: 'k@g.com', name: 'Mr. Nice', password:'1234'},
      { id:14, userId: 'n@g.com', name: 'Narco',  password:'1234'},
      { id:16, userId: 'c@g.com', name: 'Bombasto',  password:'1234'},
    ];

    const categories:Category[] = [
      new Category(1, "Electronics"),
      new Category(2, "Beauty and Health"),
      new Category(3, "Books"),
      new Category(4, "Sports and Outdoors")
    ];

    const products:Product[] = [
      new Product(11, 'SanDisk Pen Drive', 450, 10, 1),
      new Product(12, 'WDElements Hard Drive', 4500, 10, 1),
      new Product(13, 'Lenovo Z50-70 Laptop', 45000, 8, 1),
      new Product(14, 'Redmi Xiaomi Note 4', 12500, 10, 1),
      new Product(15, 'Logitech Wireless Mouse', 750, 3, 1),
      new Product(16, 'Boat Headphones 3000W', 3199, 10, 1),
    ];

    return {users, categories, products};
  }
}
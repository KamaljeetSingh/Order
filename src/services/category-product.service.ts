import { Injectable } from '@angular/core';
import { Observable } from  'rxjs/Observable';
import { Category, Product } from '../dbmodels/category-products';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';

@Injectable()
export class CategoryProductService {
  private categoryUrl = 'api/categories';
  private productUrl = 'api/products';

  
  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.categoryUrl);
  }

  getProductsByCat(id:number): Observable<Product[]>{
    return this.http.get<Product[]>(this.productUrl + '?category=' + id);
  }

}

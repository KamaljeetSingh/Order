import { Component, OnInit } from '@angular/core';
import { CategoryProductService } from '../../services/category-product.service';
import { Category, Product } from '../../dbmodels/category-products';

@Component({
  selector: 'app-category-items',
  templateUrl: './category-items.component.html',
  styleUrls: ['./category-items.component.css']
})
export class CategoryItemsComponent implements OnInit {
  categories: Category[];
  products: Product[];
  activeName:string = 'Electronics';

  constructor(private cpService: CategoryProductService) {
    this.getCategory();
    this.getProductsByCat(1);
   }

  ngOnInit() {
  }

  getCategory(){
    this.cpService.getCategories()
      .subscribe( allCat => this.categories = allCat );
  }

  getProductsByCat(id:number){
    this.cpService.getProductsByCat(id)
      .subscribe( allPro => this.products = allPro );
  }

}

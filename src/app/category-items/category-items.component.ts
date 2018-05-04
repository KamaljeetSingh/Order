import { Component, OnInit } from '@angular/core';
import { CategoryProductService } from '../../services/category-product.service';
import { Category,Product } from '../../dbmodels/category-products';

@Component({
  selector: 'app-category-items',
  templateUrl: './category-items.component.html',
  styleUrls: ['./category-items.component.css']
})
export class CategoryItemsComponent implements OnInit {
  categories: Category[];

  constructor(private cpService: CategoryProductService) {
    this.getCategory();
   }

  ngOnInit() {
  }

  getCategory(){
    this.cpService.getCategories()
      .subscribe( allCat => this.categories = allCat )
  }

}

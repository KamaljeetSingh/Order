import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shopping-items',
  templateUrl: './shopping-items.component.html',
  styleUrls: ['./shopping-items.component.css']
})
export class ShoppingItemsComponent implements OnInit {

  constructor(private router: Router,
      private activatedUrl: ActivatedRoute) { }

  ngOnInit() {
    this.router.navigate(['./item',5],{relativeTo: this.activatedUrl});
  }

  logout(){
    localStorage.setItem('loggedIn','false');
    this.router.navigate(['/home']);
  }
}

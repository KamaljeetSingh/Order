import { RouterModule, Routes    } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuardService } from '../services/auth-guard.service';
import { ShoppingItemsComponent  } from './shopping-items/shopping-items.component';
import { CategoryItemsComponent  } from './category-items/category-items.component';

const childroutes: Routes = [{
    path:'shopping', 
    component: ShoppingItemsComponent,
    children:[{
        path: '',
        component: CategoryItemsComponent,
    }] 
},
]

@NgModule({
    imports:[
        RouterModule.forChild(childroutes)
    ],
    exports: [RouterModule],
})
export class ShoppingRoutingModule{}

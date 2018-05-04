import { RouterModule, Routes    } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuardService } from '../services/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { ShoppingItemsComponent  } from './shopping-items/shopping-items.component';
import { CategoryItemsComponent  } from './category-items/category-items.component';

const routes: Routes = [
    { path:'app', component: AppComponent },
    { path:'home', component: HomeComponent, canActivate: [AuthGuardService] },
    { 
        path:'shopping', 
        component: ShoppingItemsComponent,
        children:[{
            path: 'item/:category',
            component: CategoryItemsComponent
        }] 
    },
    { path:'', redirectTo: '/app', pathMatch:'full' }
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: [AuthGuardService]
})
export class AppRoutingModule{}

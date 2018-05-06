import { Injectable } from '@angular/core'; 
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate{

    constructor(private route:Router){}

    canActivate(): boolean{
        if(localStorage.getItem('loggedIn') == 'true')
        {
            console.log("oops");
            this.route.navigate(['/shopping']);
        }    
        else
            return true;
    }
}
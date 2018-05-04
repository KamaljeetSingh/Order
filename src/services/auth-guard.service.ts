import { Injectable } from '@angular/core'; 
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate{
    canActivate(): boolean{
        if(localStorage.getItem('loggedIn') == 'true')
        {
            console.log("oops");
            return false;
        }    
            
        else
            return true;
    }
}
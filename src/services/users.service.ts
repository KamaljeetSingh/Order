import { Injectable } from '@angular/core';
import { User } from '../dbmodels/user';
import { Observable } from  'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';

@Injectable()
export class UsersService {
  private userUrl = 'api/users';
  
  constructor(private http: HttpClient) { }

  checkUser(user:User): Observable<User>{
    let id = encodeURIComponent(user.userId);
    let url = this.userUrl + "?userId=" + id;
    return this.http.get<User>(url);
  }

  addUser(user:User): Observable<User>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<User>(this.userUrl, user, httpOptions);
  }

}

import { HttpClient, HttpResponse,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from "../interfaces/user";
import {Phone} from "../interfaces/number";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private baseUrl: string = 'http://167.99.157.109:8000/';
  constructor(private http: HttpClient) { }

  createProduct(user: User): Observable<User>{
  return this.http.post<User>(this.baseUrl, user);
}

  sendsms(phone:Phone): any{
    return this.http.post(this.baseUrl+"sms/", phone);

  }
  retrieveAllExperts(): Observable<User[]> {
  return this.http.get<User[]>(this.baseUrl+"users/?search=Expert" );
}
}


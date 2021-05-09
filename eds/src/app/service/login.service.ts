import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  userLogin(user: any) {
    return this.http.post(`http://localhost:8080/login`, user.data)
    .pipe(
      tap((res: any) => {
        console.log(res)
       // authentication and local storage code can go here
    })
   );
  }
}

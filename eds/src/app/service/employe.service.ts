import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor(private http:HttpClient) { }

  getAll() {
    return this.http.get('http://localhost:8080/employe');
  }
}

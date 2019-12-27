import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  //private _url: string = "/assets/data/employees.json";

  private _url: string = 'http://localhost:8080/api/fooditem';

  constructor(private http:HttpClient) { }

  getEmployee(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
      
   
  }
  
  
}

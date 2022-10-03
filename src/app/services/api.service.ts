import { HttpClient, HttpParams  } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http :HttpClient) { }

  postItem(data:any){
  return this.http.post<any>("http://localhost:3000/productList", data);/* productList */
  }

  getItem(){
    return this.http.get<any>("http://localhost:3000/productList");
  }


}



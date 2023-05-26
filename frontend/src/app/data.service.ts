import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getCompound(page:any,size:any){
    return this.http.get(`http://localhost:3000/compound?page=${page}&size=${size}`);
  }
  getCompoundById(id:any){
    return this.http.get(`http://localhost:3000/compound/${id}`);
  }
  updateCompound(id:any,body:any){
    return this.http.patch(`http://localhost:3000/compound/${id}`,body);
  }
  deleteCompound(id:any){
    return this.http.delete(`http://localhost:3000/compound/${id}`);
  }
  createCompound(body:any){
    return this.http.post(`http://localhost:3000/compound`,body);
  }
}

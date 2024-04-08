import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BackendSeriveService {

  private baseUrl = "http://localhost:7000/api";

  //inject dependency of httpClient--injecting dependency of httpclient
  constructor(private http: HttpClient) {
    console.log("Service Running");
  }

  //to input customer details
  addCustomer(customer: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/users/addDetails`, customer);
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`);
  }

  getUserById(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/${userId}`);
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/users/${userId}`);
  }

  updateUser(userId: number, user: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/users/${userId}`, user);
  }

  registerUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/register`, user);
  }

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Authorization': 'Basic ' + btoa(username + ':' + password) });
    return this.http.get(`${this.baseUrl}/login`, { headers: headers });
  }

  getUserProfile(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/user/userProfile`);
  }

  getAdminProfile(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/admin/adminProfile`);
  }

  authenticate(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/login`, userData);
  }
}

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, of, throwError } from 'rxjs';
// import { catchError, map } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private baseUrl = 'http://localhost:7000/api'; // Replace with your authentication API base URL

//   constructor(private http: HttpClient) { }

//   login(username: string, password: string): Observable<boolean> {
//     // Call your authentication API to validate credentials
//     return this.http.post<any>(`${this.baseUrl}/login`, { username, password }).pipe(
//       map(response => {
//         // If authentication successful, save token in local storage
//         localStorage.setItem('token', response.token);
//         return true;
//       }),
//       catchError(error => {
//         console.error('Login failed:', error);
//         return throwError(error); // Pass along the error
//       })
//     );
//   }

//   logout(): void {
//     // Remove token from local storage
//     localStorage.removeItem('token');
//   }

//   isAuthenticated(): boolean {
//     // Check if token exists in local storage
//     return !!localStorage.getItem('token');
//   }

//   isAdmin(): boolean {
//     // Implement logic to check if the user is an admin
//     // For example, you could decode the token and check the role
//     // Here's a simple example assuming the token contains a 'role' claim:
//     const token = localStorage.getItem('token');
//     if (token) {
//       const decodedToken = this.decodeToken(token);
//       return decodedToken.role === 'admin';
//     }
//     return false;
//   }

//   private decodeToken(token: string): any {
//     // Decode the token (assuming it's a JWT) to extract claims
//     // You may use a library like jwt-decode or implement your own decoding logic
//     // For example, using jwt-decode library:
//     // import * as jwt_decode from 'jwt-decode';
//     // return jwt_decode(token);
//     const parts = token.split('.');
//     if (parts.length !== 3) {
//       throw new Error('Invalid JWT token');
//     }
//     const decoded = atob(parts[1]);
//     return JSON.parse(decoded);
//   }
//   }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8000/auth';

  constructor(private http: HttpClient) { }

  register(username: string, password: string, firstname: string, lastname: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register/`, { username, password, first_name: firstname, last_name: lastname })
      .pipe(tap(response => {
        const token = response.access;
        localStorage.setItem('token', token);
      }));
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login/`, { username, password })
      .pipe(tap(response => {
        const token = response.access;
        localStorage.setItem('token', token);
        const user = { username, password };
        localStorage.setItem('user', JSON.stringify(user));
      }));
  }

  logout(): Observable<void> {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return of(void 0);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  public getCurrentUser(): any {
    const user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

  getToken(): string {
    return localStorage.getItem('token')!;
  }
}

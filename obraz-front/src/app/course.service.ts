import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course, CourseModule, CoursePricing } from './models';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl = 'http://localhost:8000/courses';

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}/`);
  }

  getCourse(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.baseUrl}/${id}/`);
  }

  getCourseModules(id: number): Observable<CourseModule[]> {
    return this.http.get<CourseModule[]>(`${this.baseUrl}/${id}/modules/`);
  }

  getCoursePricing(id: number): Observable<CoursePricing[]> {
    return this.http.get<CoursePricing[]>(`${this.baseUrl}/${id}/pricing/`);
  }
}

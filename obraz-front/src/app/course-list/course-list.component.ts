import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CourseService } from '../course.service';
import { Course } from '../models';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses!: Course[];

  constructor(private courseService: CourseService, private router: Router) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses(): void {
    this.courseService.getCourses()
      .subscribe(courses => this.courses = courses);
  }

  gotoDetail(course: Course): void {
    const link = ['/courses', course.id];
    this.router.navigate(link);
  }
}



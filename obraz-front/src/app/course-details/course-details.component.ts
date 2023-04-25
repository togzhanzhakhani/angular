import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';
import { CoursePricingComponent } from '../course-pricing/course-pricing.component';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  courseId?: number;
  course: any;
  modules?: any[];
  pricing?: any[];

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.courseId = Number(params.get('id'));
      this.courseService.getCourse(this.courseId).subscribe(course => {
        this.course = course;
      });
      this.courseService.getCourseModules(this.courseId).subscribe(modules => {
        this.modules = modules;
      });
      this.courseService.getCoursePricing(this.courseId).subscribe(pricing => {
        this.pricing = pricing;
      });
    });
  }
}

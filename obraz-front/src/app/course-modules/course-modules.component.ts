import { Component, Input } from '@angular/core';
import { CourseModule } from '../models';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-modules',
  templateUrl: './course-modules.component.html',
  styleUrls: ['./course-modules.component.css']
})
export class CourseModulesComponent {
  modules?: CourseModule[];

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    const courseId = +this.route.snapshot.paramMap.get('id')!;
    this.courseService.getCourseModules(courseId).subscribe((data) => {
      this.modules = data;
    });
  }
}

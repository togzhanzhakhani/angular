import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursePricing } from '../models';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-pricing',
  templateUrl: './course-pricing.component.html',
  styleUrls: ['./course-pricing.component.css']
})
export class CoursePricingComponent implements OnInit {
  private botUsername = 'fairy_world_bot';

  get telegramUrl(): string {
    const message = encodeURIComponent('Ваш чек: ...');
    return `https://t.me/${this.botUsername}?start=${message}`;
  }
  pricing?: CoursePricing[];

  selectedPlan: any;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    const courseId = +this.route.snapshot.paramMap.get('id')!;
    this.courseService.getCoursePricing(courseId).subscribe((data) => {
      this.pricing = data;
    });
  }

  buyPlan(plan: CoursePricing): void {
    this.selectedPlan = plan;
    const el = document.getElementById('buySection');
    /*if (el) {
      console.log(el); // выведет HTML-элемент, если он был найден
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log('Элемент не найден'); // выведет сообщение, если элемент не был найден
    }*/
  }
  

  sendReceipt(): void {
    // Logic to send receipt, e.g. using Telegram API
    // Once receipt is sent:
    this.selectedPlan = null;
  }
}

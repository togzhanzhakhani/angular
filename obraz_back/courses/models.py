from django.db import models
from django.contrib.auth.models import User


class Course(models.Model):
    title = models.CharField(max_length=100)
    start_date = models.DateField()
    duration = models.IntegerField()
    target_audience = models.CharField(max_length=100)
    lessons_count = models.IntegerField()
    lesson_duration = models.IntegerField()
    about_program = models.TextField()


class CoursePricing(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()


class Module(models.Model):
    title = models.CharField(max_length=100)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    description = models.TextField()


class Instructor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    photo = models.ImageField(upload_to='instructor_photos/')
    about = models.TextField()

from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)
from .views import CourseListView, CourseDetailView, ModuleListView, CoursePricingListView, ModuleDetailView, PricingDetailView, RegisterView

app_name = 'courses'

urlpatterns = [
    path('courses/', CourseListView.as_view(), name='course-list'),
    path('courses/<int:pk>/', CourseDetailView.as_view(), name='course-detail'),
    path('courses/<int:pk>/modules/', ModuleListView.as_view(), name='module-list'),
    path('courses/<int:pk>/modules/<int:module_id>/', ModuleDetailView.as_view(), name='module-detail'),
    path('courses/<int:pk>/pricing/', CoursePricingListView.as_view(), name='course-pricing'),
    path('courses/<int:pk>/pricing/<int:pricing_id>/', PricingDetailView.as_view(), name='pricing-detail'),
    path('auth/register/', RegisterView.as_view(), name='register'),
    path('auth/login/', TokenObtainPairView.as_view(), name='jwt-obtain-token'),
    path('auth/refresh/', TokenRefreshView.as_view(), name='jwt-refresh-token'),
    path('auth/verify/', TokenVerifyView.as_view(), name='jwt-verify-token'),
]

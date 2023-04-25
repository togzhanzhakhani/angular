from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from .models import Course, CoursePricing, Module, Instructor
from .serializers import CourseSerializer, CoursePricingSerializer, ModuleSerializer, InstructorSerializer, UserSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics,  permissions
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User

class CourseListView(generics.ListCreateAPIView):
    #permission_classes = [IsAuthenticated]
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class CourseDetailView(generics.RetrieveUpdateDestroyAPIView):
    #permission_classes = [IsAuthenticated]
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class ModuleListView(generics.ListCreateAPIView):
    #permission_classes = [IsAuthenticated]
    serializer_class = ModuleSerializer

    def get_queryset(self):
        course_id = self.kwargs.get('pk')
        print("get", self.kwargs)
        return Module.objects.filter(course_id=course_id)
    
    def perform_create(self, serializer):
        course_id = self.kwargs.get('pk')
        serializer.save(course_id=course_id)


class ModuleDetailView(generics.RetrieveUpdateDestroyAPIView):
    #permission_classes = [IsAuthenticated]
    queryset = Module.objects.all()
    serializer_class = ModuleSerializer
    lookup_url_kwarg = 'module_id'


class CoursePricingListView(generics.ListCreateAPIView):
    #permission_classes = [IsAuthenticated]
    serializer_class = CoursePricingSerializer

    def get_queryset(self):
        course_id = self.kwargs['pk']
        return CoursePricing.objects.filter(course_id=course_id)
    
    def perform_create(self, serializer):
        course_id = self.kwargs.get('pk')
        serializer.save(course_id=course_id)

class PricingDetailView(generics.RetrieveUpdateDestroyAPIView):
    #permission_classes = [IsAuthenticated]
    queryset = CoursePricing.objects.all()
    serializer_class = CoursePricingSerializer
    lookup_url_kwarg = 'pricing_id'

class RegisterView(generics.CreateAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        refresh = RefreshToken.for_user(user)

        return Response({
            "refresh": str(refresh),
            "access": str(refresh.access_token),
        })

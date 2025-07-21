from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib import messages
from django.contrib.auth import authenticate, login as auth_login, update_session_auth_hash
from django.contrib.auth.models import User, auth
from django.contrib.auth.decorators import login_required
from django.conf import settings
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from http import HTTPMethod
import random
import string
import secrets
from .models import OTP  # Your custom OTP model


def generate_otp():
    return ''.join(random.choices(string.digits, k=6))

def send_otp_email(user, otp_code):
    subject = 'Your OTP for Namma Coding Shaale'
    context = {
        'name': user.username,
        'otp': otp_code
    }
    html_message = render_to_string('otp_email.html', context=context)
    message = strip_tags(html_message)
    email_from = settings.EMAIL_HOST_USER
    recipient_list = [user.email]
    
    try:
        send_mail(subject, message, email_from, recipient_list, html_message=html_message)
        return True
    except Exception as e:
        print(f"Failed to send OTP email: {str(e)}")
        return False



def login(request):
    if request.method == HTTPMethod.POST:
        # OTP verification step
        if 'otp' in request.POST:
            email = request.session.get('otp_email')
            if not email:
                messages.error(request, 'OTP session expired. Please try again.')
                return redirect('login')
            
            otp_code = request.POST['otp']
            
            try:
                user = User.objects.get(email=email)
                otp = OTP.objects.filter(user=user, code=otp_code).latest('created_at')
                
                if otp.is_valid():
                    auth_login(request, user)
                    # Clean up
                    OTP.objects.filter(user=user).delete()
                    if 'otp_email' in request.session:
                        del request.session['otp_email']
                    return redirect("home")
                else:
                    messages.error(request, 'OTP has expired. Please request a new one.')
                    return redirect('login')
            except (User.DoesNotExist, OTP.DoesNotExist):
                messages.error(request, 'Invalid OTP. Please try again.')
                return render(request, "verify_otp.html", {'email': email})
        
        # Initial email submission
        email = request.POST['email'].lower()
        
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            # Create user if not exists
            password = "1234567890"
            user = User.objects.create_user(username=email, email=email, password=password)
            user.save()
            messages.info(request, "We've created an account for you and sent an OTP to your email")
        
        # Generate and send OTP
        otp = OTP.objects.create(user=user)  # Code and expires_at are set automatically
        
        if send_otp_email(user, otp.code):
            request.session['otp_email'] = email
            return render(request, "verify_otp.html", {'email': email})
        else:
            messages.error(request, 'Failed to send OTP. Please try again.')
            return redirect('login')

    return render(request, "login.html")



def resend_otp(request):
    if request.method == HTTPMethod.POST:
        email = request.session.get('otp_email')
        if not email:
            messages.error(request, 'Session expired. Please try logging in again.')
            return redirect('login')
        
        try:
            user = User.objects.get(email=email)
            # Delete any existing OTPs for this user
            OTP.objects.filter(user=user).delete()
            
            # Create and send new OTP
            otp = OTP.objects.create(user=user)
            
            if send_otp_email(user, otp.code):
                messages.success(request, 'New OTP sent successfully!')
            else:
                messages.error(request, 'Failed to resend OTP. Please try again.')
            
            return render(request, "verify_otp.html", {'email': email})
        except User.DoesNotExist:
            messages.error(request, 'User not found. Please try again.')
            return redirect('login')
    
    return redirect('login')


@login_required(login_url="login")
def logout(request):
    auth.logout(request)
    return redirect('login')

def home(request):
    return render(request,"index.html")

@login_required(login_url="login")
def code_editor(request):
    return render(request, "code-editor.html")

@login_required(login_url="login")
def list_problems(request):
    context = {
        "is_freemium" : False if request.user.is_authenticated else True
    }
    return render(request, "list-problems.html", context)

@login_required(login_url="login")
def problem_solver(request):
    code = """def add_numbers(a, b):\n    # write your code here\n    pass"""
    code = ""
    context = {
        "saved_code" : code
    }
    return render(request, "problem-solver.html", context)


'''
   INTERNAL APIS
'''
@csrf_exempt
@api_view(['POST', 'OPTIONS'])
def save_code(request):
    print("REQUESET REVIEVED......")
    try:
        data = request.data
        
        # Basic validation
        # if not data.get('code') or not data.get('failed_count'):
        #     return Response(
        #         {"error": "Both name and email are required"},
        #         status=status.HTTP_400_BAD_REQUEST
        #     )
        
        # Process data (in a real app, you'd save to database here)
        response_data = {
            "message": "Data received successfully",
            "your_data": {
                "code": data['code'],
                "failed_count": data['failed_count'],
                "problem_id" : data['problem_id']
            }
        }
        
        return Response(response_data, status=status.HTTP_201_CREATED)
    
    except Exception as e:
        return Response(
            {"error": str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
    

def generate_password(length=8):
    alphabet = string.ascii_letters + string.digits  # ABC...XYZabc...xyz012...789
    return ''.join(secrets.choice(alphabet) for _ in range(length))
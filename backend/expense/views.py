from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import UserDetail   # make sure your model is imported
#login api
@csrf_exempt
def signup(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        fullname = data.get('FullName')
        email = data.get('Email')
        password = data.get('Password')

        try:
          user=UserDetail.objects.get(Email=email,Password=password)
          return JsonResponse({'message': 'login successfull','userId':user.id,'userName':user.FullName}, status=200)
        except:

          return JsonResponse({'message': 'Invalid credentials'}, status=400)


    # 👇 Handle GET or other methods so it never returns None
    return JsonResponse({'message': 'Signup endpoint. Use POST to register.'}, status=200)

    




# Create your views here.

from django.contrib.auth import login

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status
from .serializers import RegisterSerializer
from .services import set_jwt_cookies


class RegisterView(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            tokens = RefreshToken.for_user(user)

            response_data = {
                "message": "User has been created successfully",
                "tokens": {
                    "access": str(tokens.access_token),
                    "refresh": str(tokens),
                },
            }

            response = Response(response_data, status=status.HTTP_201_CREATED)

            set_jwt_cookies(response, str(tokens.access_token), str(tokens))
            login(request, user)
            return response

        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
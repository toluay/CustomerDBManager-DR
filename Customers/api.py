from Customers.models import Customer
from rest_framework import viewsets, permissions
from .serializers import CustomerSerializer

class CustomerViewSet(viewsets.ModelViewSet):
    class meta:
        queryset = Customer.objects.all()
        permission_classes =[permissions.AllowAny]
        Serializer_class = CustomerSerializer
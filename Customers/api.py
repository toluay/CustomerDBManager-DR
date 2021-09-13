from Customers.models import Customer
from rest_framework import viewsets, permissions
from .serializers import CustomerSerializer

class CustomerViewSet(viewsets.ModelViewSet):
    class meta:
        # queryset = Customer.objects.all()
        # permission_classes =[permissions.AllowAny]
        permission_classes = [
        permissions.IsAuthenticated,
    ]
        Serializer_class = CustomerSerializer

        def get_queryset(self):
            return self.request.user.leads.all()

        def perform_create(self, serializer):
            serializer.save(owner=self.request.user)
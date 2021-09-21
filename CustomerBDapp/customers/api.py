from customers.models import Customer
from rest_framework import viewsets, permissions
from .serializers import CustomerSerializer

# Lead Viewset


class CustomerViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = CustomerSerializer

    def get_queryset(self):
        return self.request.user.customers.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

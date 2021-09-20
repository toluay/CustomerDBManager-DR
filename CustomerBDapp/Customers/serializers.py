from rest_framework import serializers
from Customers.models import Customer 

# Lead Serializer
class CustomerSerializer(serializers.ModelSerializer):
  class Meta:
    model = Customer 
    fields = '__all__'
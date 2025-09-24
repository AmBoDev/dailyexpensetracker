from django.db import models

class UserDetail(models.Model):
    FullName = models.CharField(max_length=100)
    Email = models.EmailField(max_length=100, unique=True)
    Password = models.CharField(max_length=100)
    RegDate = models.DateTimeField(auto_now_add=True)
    def __str__(self):
      return self.FullName
class Expense(models.Model):
    UserId = models.ForeignKey(UserDetail, on_delete=models.CASCADE)
    ExpenseDate = models.CharField(max_length=100)  # or models.DateField()
    ExpenseItem = models.CharField(max_length=100)
    ExpenseCost = models.CharField(max_length=100)
    NoteDate = models.DateTimeField(auto_now_add=True)
    def __str__(self):
      return self.FullName

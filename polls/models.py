from django.db import models
from django.contrib.auth import get_user_model


# Create your models here.
# Many to one => A pool can only be created by one user, but a user can have multiple pools.

class Poll(models.Model):
    poll_question = models.CharField(max_length=255)
    active = models.BooleanField(default=True)
    public = models.BooleanField(default=False)

    created_by = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now=True)
    last_edited = models.DateTimeField()


class Choice(models.Model):
    choice_text = models.CharField(max_length=255)
    poll = models.ForeignKey(Poll, on_delete=models.CASCADE)
    votes = models.IntegerField()


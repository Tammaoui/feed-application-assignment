from django.http import HttpResponse
from http import HTTPStatus

from .models import Poll, Choice


def polls(request):
    response_data = None
    match request.method:
        case "POST":
            poll_question = request.POST['email']
            created_by = request.user
            poll = Poll(poll_question=poll_question, created_by=created_by)
            poll.save()
        case "DELETE":
            poll_id = request.DELETE['id']
            Poll.objects.get(pk=poll_id).delete()
        case "PUT":
            print("Update poll")
        case "GET":
            response_data = Poll.objects.get()

    return HttpResponse(response_data, status=HTTPStatus.OK)


def choices(request):
    response_data = None
    match request.method:
        case "POST":
            choice_text = request.POST['choice_text']
            poll_id = request.POST['poll_id']
            poll = Poll.objects.get(pk=poll_id)
            choice = Choice(choice_text=choice_text, poll=poll)
            choice.save()
        case "DELETE":
            choice_id = request.DELETE['id']
            Choice.objects.get(pk=choice_id).delete()
            pass
        case "PUT":
            print("Update choice")

    return HttpResponse(response_data, status=HTTPStatus.OK)

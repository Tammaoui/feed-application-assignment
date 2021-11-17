from django.http import HttpResponse
from http import HTTPStatus

from .models import Poll, Choice

from django.views.decorators.csrf import csrf_exempt

# Lage en poll

# Lage choices til en poll

# Lage profilside

# Lage de forskjellige sidene
# 1. Lage poll 2. Lag options 3. Stem på poll

@csrf_exempt
def hello_world(request):
    if request.method == "POST":
        print(request.POST['poll_question'])
    return HttpResponse("Hello world!")

def polls(request):
    response_data = None
    match request.method:
        case "POST":
            poll_question = request.POST['poll_question']
            created_by = request.user
            poll = Poll(poll_question=poll_question, created_by=created_by)
            poll.save()
        case "DELETE":
            poll_id = request.DELETE['id']
            Poll.objects.get(pk=poll_id).delete()
        case "PUT":
            pass
        case "GET":
            response_data = Poll.objects.get(created_by=request.user)

    return HttpResponse(response_data, status=HTTPStatus.OK)


def search_for_polls(request, query):
    poll = Poll.objects.get(poll_question__contains=query)
    return HttpResponse(poll)


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

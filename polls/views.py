import json
from django.http import HttpResponse
from http import HTTPStatus
from .models import Poll, Choice
from django.views.decorators.csrf import csrf_exempt
import dweepy


# Lage en poll

# Lage choices til en poll

# Lage profilside

# Lage de forskjellige sidene
# 1. Lage poll 2. Lag options 3. Stem på poll

@csrf_exempt
def hello_world(request):
    if request.method == "POST":
        body = json.loads(request.body)
        print(body['poll_question'])
    return HttpResponse("Hello world!")


@csrf_exempt
def polls(request):
    response_data = None
    response_status = HTTPStatus.OK
    match request.method:
        case "POST":
            body = json.loads(request.body)
            poll_question = body['poll_question']
            active = body['active']
            public = body['public']
            created_by = request.user
            poll = Poll(poll_question=poll_question, active=active, public=public, created_by=created_by)
            poll.save()
            dweepy.dweet({poll.id :{
                'id': poll.id,
                'poll_question': poll.poll_question,
                'active': poll.active,
                'public': poll.public,
                'choices': get_choices_by_poll(poll)}
            })
            poll_choices = body["poll_choices"]
            if poll_choices:
                for poll_choice in poll_choices:
                    pc = Choice(choice_text=poll_choice['choice_text'], poll=poll, votes=0)
                    pc.save()
                    dweepy.dweet({pc.id : {'id': pc.id, 'choice_text' : pc.choice_text}})
            response_data = "Poll created successfully"
            response_status = HTTPStatus.CREATED
            all_polls = Poll.objects.all()
            dweepy.dweet({'polls', all_polls})
        case "DELETE":
            body = json.loads(request.body)
            poll_id = body['id']
            poll = Poll.objects.get(pk=poll_id)
            if request.user == poll.created_by:
                Poll.objects.get(pk=poll_id).delete()
                response_data = "Poll deleted."
        case "PUT":
            pass
        case "GET":
            list_of_polls = []
            try:
                list_of_polls = dweepy.get_latest_dweet_for('polls')
            except Exception as e:
                response_data = list(Poll.objects.filter(created_by=request.user))
                for poll in response_data:
                    list_of_polls.append({
                        'id': poll.id,
                        'poll_question': poll.poll_question,
                        'active': poll.active,
                        'public': poll.public,
                        'choices': get_choices_by_poll(poll)
                    })
                dweepy.dweet({'polls': list_of_polls})
            response_data = list_of_polls
            print("Dweepy polls", list_of_polls)
    return HttpResponse(json.dumps(response_data), status=response_status)


def get_single_poll(request, id):
    poll = Poll.objects.get(pk=id)
    if poll is None:
        return HttpResponse(status=HTTPStatus.NOT_FOUND)
    poll_data = {
        'id': poll.id,
        'poll_question': poll.poll_question,
        'active': poll.active,
        'public': poll.public,
        'choices': get_choices_by_poll(poll)}
    print(poll_data)
    return HttpResponse(json.dumps(poll_data), status=200)


def get_choices_by_poll(poll):
    choices_as_list = []
    choices_queryset = list(Choice.objects.filter(poll=poll))
    for choice in choices_queryset:
        choices_as_list.append({
            "choice_text": choice.choice_text,
            "id": choice.id,
            "votes": choice.votes
        })
    return choices_as_list


def search_for_polls(request, query):
    polls_queryset = Poll.objects.filter(poll_question__icontains=query)
    print(polls_queryset)
    list_of_polls = []
    for poll in polls_queryset:
        list_of_polls.append({
            'id': poll.id,
            'poll_question': poll.poll_question,
            'active': poll.active,
            'public': poll.public,
            'choices': get_choices_by_poll(poll)
        })
    response_data = list_of_polls
    return HttpResponse(json.dumps(response_data), status=HTTPStatus.OK)


@csrf_exempt
def choices(request):
    response_data = None
    match request.method:
        case "POST":
            data = json.loads(request.body)
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
            data = json.loads(request.body)
            choice_id = data['choice_id']
            choice = Choice.objects.get(pk=choice_id)
            choice.votes = choice.votes + 1
            choice.save()
            response_data = 'Your vote has been registered'

    return HttpResponse(response_data, status=HTTPStatus.OK)

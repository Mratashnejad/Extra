from flask import Flask, request, Response
from viberbot import Api
from viberbot.api.bot_configuration import BotConfiguration
from viberbot.api.messages.text_message import TextMessage
from viberbot.api.viber_requests import ViberConversationStartedRequest
from viberbot.api.viber_requests import ViberFailedRequest
from viberbot.api.viber_requests import ViberMessageRequest
from viberbot.api.viber_requests import ViberSubscribedRequest
from viberbot.api.viber_requests import ViberUnsubscribedRequest

import time
import logging
import sched
import threading

logger = logging.getLogger()
logger.setLevel(logging.DEBUG)
handler = logging.StreamHandler()
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)
logger.addHandler(handler)

app = Flask(__name__)
viber = Api(BotConfiguration(
  name='mratashnejadbot',
  avatar='http://viber.com/avatar.jpg',
  auth_token='4c2bd457b067df00-8341ad4def0f91cc-9ce69133fdda2862'
))

@app.route('/', methods=['POST'])
def incoming():
	logger.debug("received request. post data: {0}".format(request.get_data()))

	viber_request = viber.parse_request(request.get_data().decode('utf8'))

	if isinstance(viber_request, ViberMessageRequest):
		message = viber_request.message
		viber.send_messages(viber_request.sender.id, [
			message
		])
	elif isinstance(viber_request, ViberConversationStartedRequest) \
			or isinstance(viber_request, ViberSubscribedRequest) \
			or isinstance(viber_request, ViberUnsubscribedRequest):
		viber.send_messages(viber_request.sender.id, [
			TextMessage(None, None, viber_request.get_event_type())
		])
	elif isinstance(viber_request, ViberFailedRequest):
		logger.warn("client failed receiving message. failure: {0}".format(viber_request))

	return Response(status=200)

def set_webhook(viber):
	viber.set_webhook('https://e40c700f2d41.ngrok.io')

if __name__ == "__main__":
	scheduler = sched.scheduler(time.time, time.sleep)
	scheduler.enter(5, 1, set_webhook, (viber,))
	t = threading.Thread(target=scheduler.run)
	t.start()

	context = ('server.crt', 'server.key')
	app.run(host='http://localhost/', port=8080, debug=True, ssl_context=context)
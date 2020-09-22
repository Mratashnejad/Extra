from viberbot import Api
from viberbot.api.bot_configuration import BotConfiguration

bot_configuration = BotConfiguration(
    name='MratashnejadBot',
    avatar='http://viber.com/avatar.jpg',
    auth_token='4bdaa3514de7d042-8f5e1a8bfbfbaff7-57b58541fc7233b1'
)

viber = Api(bot_configuration)

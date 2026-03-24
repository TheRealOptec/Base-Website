from .api_interface import ApiInterface

class NewsApi(ApiInterface):

    API_KEY_FNAME = "./mybase/apis/news_api_key.env"

    def __init__(self):
        with open(NewsApi.API_KEY_FNAME, "r") as f:
            self.apiKey = f.read().strip()

    def getUrl(self, json):
        return f"https://newsapi.org/v2/everything?apiKey={self.apiKey}"

import os

from .api_interface import ApiInterface
from .url_search_params import URLSearchParams

class NewsApi(ApiInterface):

    API_KEY_FNAME = "./mybase/apis/news_api_key.env"
    API_URL = "https://newsapi.org/v2/everything"

    def __init__(self):
        self.apiKey = os.getenv("NEWS_API_KEY", "").strip()

        if self.apiKey:
            return

        if os.path.exists(NewsApi.API_KEY_FNAME):
            with open(NewsApi.API_KEY_FNAME, "r") as f:
                self.apiKey = f.read().strip()

    def getUrl(self, json):
        params = dict(json)
        if self.apiKey:
            params["apiKey"] = self.apiKey
        return URLSearchParams.setSearchParams(NewsApi.API_URL, params)
    
    def checkStatus(self, response):
        if response.json()["status"] == "error":
            return False
        return True

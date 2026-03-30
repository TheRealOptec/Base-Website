from .search_in_options import SearchIn
from .sort_by_options import SortBy
from django.db.models import Count

from mybase.models import Topic,Page

class SearchingHandler:

    sortFns = {
        SortBy.NEWEST: lambda data: data.order_by("-created_at"),
        SortBy.MOST_VIEWED: lambda data: data.order_by("-views"),
        SortBy.MOST_LIKED: lambda data: data.order_by("-likes"),
        SortBy.RELEVANCE: lambda data: data
    }

    def search(q, searchIn=SearchIn.ALL(), sortBy=SortBy.MOST_LIKED):
        # Search
        # Adapted from: https://www.w3schools.com/django/django_queryset_filter.php
        topics = Topic.objects.none()
        posts = Page.objects.none()
        if SearchIn.getVal(searchIn, SearchIn.TOPICS_IX) > 0:
            topics = Topic.objects.filter(name__icontains=q)
        if SearchIn.getVal(searchIn, SearchIn.POSTS_IX) > 0:
            posts = (
                Page.objects
                .filter(title__icontains=q)
                .select_related("topic", "author")
                .annotate(comment_count=Count("comment", distinct=True))
            )
        # Sort
        posts = SearchingHandler.sort(posts, sortBy)
        topics = SearchingHandler.sort(topics, sortBy)
        return (posts, topics)
    
    def sort(data, sortBy):
        return SearchingHandler.sortFns[sortBy](data)

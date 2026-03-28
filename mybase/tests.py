from django.contrib.auth.models import User
from django.test import TestCase
from django.urls import reverse

from mybase.models import Page, Topic


class PostEditorTests(TestCase):
    def setUp(self):
        self.author = User.objects.create_user(username='author', password='testpass123')
        self.other_user = User.objects.create_user(username='other-user', password='testpass123')
        self.topic = Topic.objects.create(name='General Discussion', description='General topic')
        self.post = Page.objects.create(
            author=self.author,
            topic=self.topic,
            title='Original Title',
            body='Original body',
        )

    def test_make_post_creates_post_and_redirects_to_detail(self):
        creator = User.objects.create_user(username='creator', password='testpass123')
        topic = Topic.objects.create(name='Announcements', description='Project updates')
        self.client.login(username='creator', password='testpass123')

        response = self.client.post(
            reverse('mybase:make_post', args=[topic.slug]),
            {
                'title': 'Fresh Post',
                'body': '<simples><p>Hello world</p></simples>',
            },
        )

        created_post = Page.objects.get(topic=topic)
        self.assertEqual(created_post.author, creator)
        self.assertEqual(created_post.title, 'Fresh Post')
        self.assertRedirects(
            response,
            reverse('mybase:view_post', args=[topic.slug, created_post.slug]),
        )

    def test_edit_post_prefills_existing_content_for_author(self):
        self.client.login(username='author', password='testpass123')

        response = self.client.get(
            reverse('mybase:edit_post', args=[self.topic.slug, self.post.slug])
        )

        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'Edit Post')
        self.assertContains(response, 'Original Title')
        self.assertContains(response, 'Original body')

    def test_edit_post_updates_post_and_redirects(self):
        self.client.login(username='author', password='testpass123')

        response = self.client.post(
            reverse('mybase:edit_post', args=[self.topic.slug, self.post.slug]),
            {
                'title': 'Updated Title',
                'body': 'Updated body content',
            },
        )

        self.post.refresh_from_db()
        self.assertEqual(self.post.title, 'Updated Title')
        self.assertEqual(self.post.body, 'Updated body content')
        self.assertEqual(self.post.slug, 'updated-title')
        self.assertRedirects(
            response,
            reverse('mybase:view_post', args=[self.topic.slug, self.post.slug]),
        )

    def test_edit_post_rejects_non_author(self):
        self.client.login(username='other-user', password='testpass123')

        response = self.client.post(
            reverse('mybase:edit_post', args=[self.topic.slug, self.post.slug]),
            {
                'title': 'Malicious Update',
                'body': 'Should not save',
            },
        )

        self.post.refresh_from_db()
        self.assertEqual(response.status_code, 403)
        self.assertEqual(self.post.title, 'Original Title')
        self.assertEqual(self.post.body, 'Original body')

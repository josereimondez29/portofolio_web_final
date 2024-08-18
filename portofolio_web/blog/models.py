#blog/models.py
from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    image = models.ImageField(upload_to='blog_images/', blank=True, null=True)
    category = models.CharField(max_length=100, blank=True, null=True)  # Añadido campo category

    def __str__(self):
        return self.title

    class Meta:
        db_table = 'blog_post'  # Opcional, pero asegura que el nombre de la tabla sea exacto

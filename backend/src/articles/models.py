from django.db import models


class Article(models.Model):
    title = models.CharField(max_length=120)
    manager = models.CharField(max_length=120)
    datetime = models.TextField()  # tarikh
    quantity = models.IntegerField(default=1)  # tedad
    gender = models.CharField(max_length=50)  # jensiat
    lable = models.CharField(max_length=50)  # zarorat
    language = models.CharField(max_length=50)  # zaban
    # slug = models.SlugField()  # onvaneLink
    

    def __str__(self):
        return self.title

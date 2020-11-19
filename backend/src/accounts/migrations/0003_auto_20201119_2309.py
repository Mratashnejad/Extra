# Generated by Django 2.2.10 on 2020-11-19 19:09

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_shiftmanager'),
    ]

    operations = [
        migrations.CreateModel(
            name='Dealer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('shiftDate', models.CharField(max_length=100)),
                ('language', models.CharField(max_length=100)),
                ('extraCounter', models.IntegerField(default=0)),
                ('cancelCounter', models.IntegerField(default=0)),
                ('status', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='FloorManager',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('shiftDate', models.CharField(max_length=100)),
                ('extraCounter', models.IntegerField(default=0)),
                ('cancelCounter', models.IntegerField(default=0)),
                ('status', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='LiveSuppoert',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('shiftDate', models.CharField(max_length=100)),
                ('extraCounter', models.IntegerField(default=0)),
                ('cancelCounter', models.IntegerField(default=0)),
                ('status', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Manager',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('shiftTitle', models.CharField(max_length=120)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Shift',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('line', models.CharField(max_length=150)),
                ('title', models.CharField(max_length=120)),
                ('language', models.CharField(max_length=100)),
                ('userCount', models.CharField(max_length=120)),
                ('dealer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='accounts.Dealer')),
                ('floorManager', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='accounts.FloorManager')),
                ('liveSupport', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='accounts.LiveSuppoert')),
                ('manager', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='accounts.Manager')),
            ],
        ),
        migrations.CreateModel(
            name='Shuffler',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('shiftDate', models.CharField(max_length=100)),
                ('extraCounter', models.IntegerField(default=0)),
                ('cancelCounter', models.IntegerField(default=0)),
                ('status', models.CharField(max_length=100)),
                ('shiftManager', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='accounts.Manager')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.DeleteModel(
            name='ShiftManager',
        ),
        migrations.AddField(
            model_name='livesuppoert',
            name='shiftManager',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='accounts.Manager'),
        ),
        migrations.AddField(
            model_name='livesuppoert',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='floormanager',
            name='shiftManager',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='accounts.Manager'),
        ),
        migrations.AddField(
            model_name='floormanager',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='dealer',
            name='shiftManager',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='accounts.Manager'),
        ),
        migrations.AddField(
            model_name='dealer',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
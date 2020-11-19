# Generated by Django 2.2.10 on 2020-11-19 22:02

from django.conf import settings
import django.contrib.auth.validators
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0011_update_proxy_permissions'),
    ]

    operations = [
        migrations.CreateModel(
            name='CustomUser',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('username', models.CharField(error_messages={'unique': 'A user with that username already exists.'}, help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=150, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='username')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('phonenumber', models.CharField(max_length=9, unique=True, verbose_name='phone number')),
                ('email', models.EmailField(max_length=254, unique=True, verbose_name='email address')),
                ('first_name', models.CharField(blank=True, max_length=100)),
                ('last_name', models.CharField(blank=True, max_length=150)),
                ('position', models.CharField(max_length=50)),
                ('gender', models.CharField(blank=True, max_length=10)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
        ),
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
            name='LiveSupport',
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
                ('managerTitle', models.CharField(max_length=120)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
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
        migrations.CreateModel(
            name='Shift',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('line', models.CharField(max_length=150)),
                ('title', models.CharField(max_length=120)),
                ('language', models.CharField(max_length=100)),
                ('dealer', models.ManyToManyField(to='accounts.Dealer')),
                ('floorManager', models.ManyToManyField(to='accounts.FloorManager')),
                ('liveSupport', models.ManyToManyField(to='accounts.LiveSupport')),
                ('manager', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='accounts.Manager')),
                ('shuffler', models.ManyToManyField(to='accounts.Shuffler')),
            ],
        ),
        migrations.AddField(
            model_name='livesupport',
            name='shiftManager',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='accounts.Manager'),
        ),
        migrations.AddField(
            model_name='livesupport',
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

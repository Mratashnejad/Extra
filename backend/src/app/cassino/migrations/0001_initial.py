# Generated by Django 3.1 on 2021-01-22 07:10

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Dealers',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('create_at', models.DateTimeField(auto_now_add=True)),
                ('update_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='ExtraShifts',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=100)),
                ('slug', models.SlugField()),
                ('ExtraShift_Date', models.DateField()),
                ('ExtraShift_Time', models.CharField(choices=[('now', 'NOW'), ('10', '10am to 6pm'), ('6', '6pm to 2am'), ('2', '2am to 10am')], max_length=50)),
                ('create_at', models.DateTimeField(auto_now_add=True)),
                ('update_at', models.DateTimeField(auto_now_add=True)),
                ('priority', models.CharField(choices=[('Normal', 'Normal'), ('Urgent', 'Urgent')], default='Normal', max_length=12)),
                ('quantity', models.IntegerField(default=1)),
            ],
        ),
        migrations.CreateModel(
            name='Languages',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('Language_name', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Managers',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('create_at', models.DateTimeField(auto_now_add=True)),
                ('update_at', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Shifts',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('shift_name', models.CharField(max_length=255)),
                ('language_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cassino.languages')),
                ('manager_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cassino.managers')),
            ],
        ),
        migrations.CreateModel(
            name='Staffs',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('create_at', models.DateTimeField(auto_now_add=True)),
                ('update_at', models.DateTimeField(auto_now_add=True)),
                ('language_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cassino.languages')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Shufflers',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('create_at', models.DateTimeField(auto_now_add=True)),
                ('update_at', models.DateTimeField(auto_now_add=True)),
                ('shift_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cassino.shifts')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='shifts',
            name='staff_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cassino.staffs'),
        ),
        migrations.CreateModel(
            name='FloorManagers',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('create_at', models.DateTimeField(auto_now_add=True)),
                ('update_at', models.DateTimeField(auto_now_add=True)),
                ('language_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cassino.languages')),
                ('shift_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cassino.shifts')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='ExtraShiftsOrder',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('create_at', models.DateTimeField(auto_now_add=True)),
                ('ordered', models.BooleanField(default=False)),
                ('dealer', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='cassino.dealers')),
                ('shift', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cassino.extrashifts')),
            ],
        ),
        migrations.AddField(
            model_name='extrashifts',
            name='language_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cassino.languages'),
        ),
        migrations.AddField(
            model_name='extrashifts',
            name='shift_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cassino.shifts'),
        ),
        migrations.AddField(
            model_name='dealers',
            name='language_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cassino.languages'),
        ),
        migrations.AddField(
            model_name='dealers',
            name='shift_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cassino.shifts'),
        ),
        migrations.AddField(
            model_name='dealers',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]

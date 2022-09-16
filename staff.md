---
layout: page
title: Staff
description: A listing of all the course staff members.
---



# Staff

## Instructor

{% for staffer in site.data.staff.staff %}
{% if staffer.role == "Instructor" %}
<div class="staffer">
  <img class="staffer-image" src="/assets/images/staff/{{staffer.image}}" alt="">
  <div>
    <h3 class="staffer-name">
      {{ staffer.name }}
    </h3>
    <p><a href="mailto:{{ staffer.email }}">{{ staffer.email }}</a></p>
    {% if staffer.appointment == "y" %}
    <p><a href="https://calendar.google.com/calendar/u/0/selfsched?sstoken=UUZiRUdjc0dwUzZhfGRlZmF1bHR8ZmIxOGMwNGJhNjA4YTNhN2I2MDZlNzAxNzU0NWRlNGQ" class="btn btn-outline">Book UBS appointment</a></p>
    {% endif %}
  </div>
</div>
{% endif %}
{% endfor %}

## Teaching Assistants

{% for staffer in site.data.staff.staff %}
{% if staffer.role == "Teaching Assistant" or staffer.role == "Lab Engineer"%}
<div class="staffer">
  <img class="staffer-image" src="/assets/images/staff/{{staffer.image}}" alt="">
  <div>
    <h3 class="staffer-name">
      {{ staffer.name }}
    </h3>
    <p><a href="mailto:{{ staffer.email }}">{{ staffer.email }}</a></p>
    {% if staffer.appointment == "y" %}
    <p><a href="https://calendar.google.com/calendar/u/0/selfsched?sstoken=UUVYbzM5MTRRQlh4fGRlZmF1bHR8OTFlZDZiZDI5M2EyNWVlN2U0NGEzNjlhZGIzM2RiN2E" class="btn btn-outline">Book TA appointment</a></p>
    {% endif %}
  </div>
</div>
{% endif %}
{% endfor %}



---
layout: page
title: Announcements
nav_order: 1
[//]: # (nav_exclude: true)
description: A feed containing all of the class announcements.
---

# Announcements

{% for data in site.data.calendarData.week_data reversed %}
{% if data.visible == "y" %}
<div class="announcement" markdown="1">
<h2> {{data.week}} Announcement </h2>
<span class="announcement-meta" markdown="1">
{%- if data.announcement_date -%}
    {{ data.announcement_date | announcement_date: '%b %e' }}
{% endif %} &middot; {% assign minutes = content | strip_html | number_of_words | divided_by: 180.0 | round %}
{{ minutes }} min read
</span>
<div markdown="1">
{%- if data.lab_a -%}
1. {{data.week}} {{data.lab_a}} : Deadline [{{data.lec_a_date}}, {{data.lab_a_deadline_time}}](#).{%- endif -%}
{% if data.lab_b %}
1. {{data.week}} {{data.lab_b}} : Deadline [{{data.lec_b_date}}, {{data.lab_b_deadline_time}}](#).{%- endif -%}
{% if data.assignment_no %}
1. {{data.week}} {{data.assignment_no}} : Deadline [{{data.assignment_date}}, {{data.assign_deadline_time}}](#).{% endif %}
1. Quiz in both lectures
1. Details of them are available in calendar section

Late submissions 
* Labs with 75% maximum credit till 11:59 pm of same day, No late submission after that. 
* No late submissions acceptable for assignment.
</div>
</div>
{% endif %}
{% endfor %}

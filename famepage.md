---
layout: page
title: Page of Fame
description: A listing of all students who have performed best during the week
---

# Students

A listing of all students who have performed best during each week

## Weekly Best Performer

{% for student in site.data.pageOfFame.top_std_of_week %}
<div class="staffer">
  <img class="staffer-image" src="/assets/images/students/{{student.image}}" alt="">
  <div>
    <h3 class="staffer-name">
      {% if student.student_name %}
      {{ student.student_name }}
      {% endif %}
    </h3>
    {% if student.student_email %}
    <p><a href="mailto:{{ student.student_email }}">{{ student.student_email }}</a></p>
    {% endif %}
    <p>{{ student.week }}</p>
  </div>
</div>
{% endfor %}

## Overall Top 3 Performers 

{% for student in site.data.pageOfFame.overall_top_std %}
<div class="staffer">
  <img class="staffer-image" src="/assets/images/students/{{student.overallTop_std_image}}" alt="">
  <div>
    <h3 class="staffer-name">
      {% if student.overallTop_std_name %}
      {{ student.overallTop_std_name }}
      {% endif %}
    </h3>
    {% if student.overallTop_std_email %}
    <p><a href="mailto:{{ student.overallTop_std_email }}">{{ student.overallTop_std_email }}</a></p>
    {% endif %}
  </div>
</div>
{% endfor %}

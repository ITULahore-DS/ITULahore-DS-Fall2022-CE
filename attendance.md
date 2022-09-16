---
layout: page
title: Attendance
description: Attendance Details
---

# {{page.title}}

1. <span class="text-green-200">Green for those Students having 100% Attendance</span>
1. <span class="text-yellow-200">Yellow for those students that can be terminated if they don't improve their attendance</span>
1. <span class="text-red-200">Red for Terminated Students</span>
<div class="announcement" markdown="1">
<ul style="list-style-type: none;">
{% for student in site.data.attendance.attendance %}
{% assign lab_present_percentage = student.p_lab_percentage | plus: 0 %}
{% assign lab_absent_percentage = student.a_lab_percentage | plus: 0 %}
{% assign theory_present_percentage = student.p_theory_percent | plus: 0 %}
{% assign theory_absent_percentage = student.a_theory_percent | plus: 0 %}

{% if forloop.index == 1 %}
<li style="border-bottom: 1px solid #ede7e7; padding-bottom: 6px; margin-bottom: 6px">
    <div style="display: flex;" > 
        <div style="flex-basis: 25%"> <b>Registration No.</b> </div>
        <div style="flex-basis: 25%"> <b>Name</b> </div>
        <div style="flex-basis: 25%"> <b>Theory Attendance</b> </div>
        <div style="flex-basis: 25%"> <b>Lab Attendance</b> </div>
    </div>
</li>
{% endif %}

 <li style="border-bottom: 1px solid #ede7e7; padding: 4px 0px 4px 0px" class="">
    <div style="display: flex;" > 
        <div style="flex-basis: 25%" 
        class="
        {% if theory_present_percentage == 100 and lab_present_percentage == 100 %} 
                    text-green-200 
        {% endif %}
        {% if theory_present_percentage <= 85 and theory_absent_percentage < 20 or lab_present_percentage <= 85 and lab_absent_percentage < 20 %}
                    text-yellow-200 
        {% endif %}
        {% if theory_absent_percentage >= 20 or lab_absent_percentage >= 20 %}
                    text-red-200 
        {% endif %}
        ">
            {{student.registration_no}} 
        </div>
        <div style="flex-basis: 25%" 
        class="
        {% if theory_present_percentage == 100 and lab_present_percentage == 100 %} 
                    text-green-200 
        {% endif %}
        {% if theory_present_percentage <= 85 and theory_absent_percentage < 20 or lab_present_percentage <= 85 and lab_absent_percentage < 20 %}
                    text-yellow-200 
        {% endif %}
        {% if theory_absent_percentage >= 20 or lab_absent_percentage >= 20 %}
                    text-red-200 
        {% endif %}
        "> 
            {{student.std_name}} </div>
        <div style="flex-basis: 25%" 
            class="
                {% if theory_present_percentage == 100 %} 
                    text-green-200 
                {% elsif theory_present_percentage <= 85 and theory_absent_percentage < 20 %}
                    text-yellow-200 
                {% elsif theory_absent_percentage >= 20 %} 
                    text-red-200
                {% endif %} ">
                {{student.p_theory_percent}}% 
        </div>
        <div style="flex-basis: 25%"
            class="
            {% if lab_present_percentage == 100 %} 
                    text-green-200 
                {% elsif lab_present_percentage <= 85 and lab_absent_percentage < 20 %}
                    text-yellow-200 
                {% elsif lab_absent_percentage >= 20 %} 
                    text-red-200 
                {% endif %}">
                {{student.p_lab_percentage}}%
        </div>
    </div>
</li>
{% endfor %}
</ul>
</div>
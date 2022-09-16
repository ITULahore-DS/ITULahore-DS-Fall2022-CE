---
layout: page
title: Calendar
nav_order: 2
description: Listing of course modules and topics.
---

# Calendar

{% for data in site.data.calendarData.week_data %}
{% if data.visible == "y" %}
## {{data.week}} - {{data.title}}
<div class="module" markdown="1">
 {% if data.notice %}
{{data.notice_date}}
:   {{data.notice}}
<div></div>
{%- endif -%}
{% if data.notice %}
{{data.notice_b_date}}
:   {{data.notice_b}}
<div></div>
{%- endif -%}
{%- if data.lec_a_topic -%}
{{data.lec_a_date}}
:   {% if data.lec_a_topic and data.lec_a_link %} **Theory**{: .label .schedule-event.lecture } 
{%- if data.lec_a_makeup == 'y' -%}
**Make-up**{: .label .label-yellow } {% endif %} **[{{data.lec_a_topic}}]({{data.lec_a_link}})** 
{%- elsif data.lec_a_topic -%}
**Theory**{: .label .schedule-event.lecture }
{%- if data.lec_a_makeup == 'y' -%}
**Make-up**{: .label .label-yellow } {% endif %} {{data.lec_a_topic}}
{% endif %} 
{%- if data.quiz_a_link -%}
&emsp; [Quiz]({{data.quiz_a_link}}) {% endif %}
{%- if data.quiz_a_sol_link -%}
&emsp; **[Quiz Solution]({{data.quiz_a_sol_link}})** {% endif %}
<div></div>
{% endif %}
{% if data.lab_a %}
{{data.lec_a_date}}
:       **Lab**{: .label .label-green } 
{%- if data.lab_a_makeup == 'y' -%}
**Make-up**{: .label .label-yellow } 
{%- endif -%}
{{data.week}} 
{%- if data.lab_a_link -%}
:   **[{{data.lab_a}}]({{data.lab_a_link}})** 
{%- else -%}
:    {{data.lab_a}} 
{% endif %}
{%- if data.lab_a_sol_link -%}
&emsp; [Lab Solution]({{data.lab_a_sol_link}})
{% endif %}
<div></div>
{% endif %}
{% if data.lec_b_topic %}
{{data.lec_b_date}}
:       {% if data.lec_b_topic and data.lec_b_link %} **Theory**{: .label .schedule-event.lecture } 
{%- if data.lec_a_makeup == 'y' -%}
**Make-up**{: .label .label-yellow } 
{%- endif -%}
**[{{data.lec_b_topic}}]({{data.lec_b_link}})** 
{%- elsif data.lec_b_topic -%}
**Theory**{: .label .schedule-event.lecture }
{%- if data.lec_a_makeup == 'y' -%}
**Make-up**{: .label .label-yellow } 
{%- endif -%} {{data.lec_b_topic}}
{%- endif -%}
{%- if data.quiz_b_link -%}
&emsp; [Quiz]({{data.quiz_b_link}}) {% endif %}
{%- if data.quiz_b_sol_link -%}
&emsp; **[Quiz Solution]({{data.quiz_b_sol_link}})**
{% endif %}
<div></div>
{% endif %}
{% if data.lab_b %}
{{data.lec_b_date}}
:       **Lab**{: .label .label-green } 
{%- if data.lab_b_makeup == 'y' -%}
**Make-up**{: .label .label-yellow } 
{%- endif -%}
{{data.week}} 
{%- if data.lab_b_link -%}
:   **[{{data.lab_b}}]({{data.lab_b_link}})** 
{%- else -%}
:   {{data.lab_b}} 
{% endif %}
{%- if data.lab_b_sol_link -%}
&emsp; [Lab Solution]({{data.lab_b_sol_link}})
{% endif %}
<div></div>
{% endif %}
{% if data.assignment_no %}
{{data.assignment_date}}
:       **Assignment**{: .label .label-red }  
{%- if data.assignment_link -%}
**[{{data.assignment_no}}]({{data.assignment_link}})** 
{%- else -%} {{data.assignment_no}} 
{% endif %}
{%- if data.assignment_sol_link -%}
&emsp; [Assignment Solution]({{data.assignment_sol_link}})
{% endif %}
{% endif %}
</div>
{% endif %}
{% endfor %}

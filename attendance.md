---
layout: page
title: Attendance
description: Attendance Details
---
<link rel="stylesheet" href="/assets/css/style.css">

# {{page.title}}

1. <span class="text-green-200">Green for those Students having 100% Attendance</span>
1. <span class="text-yellow-200">Yellow for those students that can be terminated if they don't improve their attendance</span>
1. <span class="text-red-200">Red for Terminated Students</span>

<div class="announcement" markdown="1">
<ul style="list-style-type: none;" id="ul_container">
<li style="border-bottom: 1px solid #ede7e7; padding-bottom: 6px; margin-bottom: 6px">
<div style="display: flex;" > 
<div style="flex-basis: 25%"> <b>Registration No.</b> </div>
<div style="flex-basis: 25%"> <b>Name</b> </div>
<div style="flex-basis: 25%"> <b>Theory Attendance</b> </div>
<div style="flex-basis: 25%"> <b>Lab Attendance</b> </div>
</div>
</li>
</ul>
</div>

<div class="loader" id="loader"></div>

<script src="/assets/js/attendance.js">
</script>

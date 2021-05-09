---
layout: default
---

{% assign notesByDay = 
site.notes | group_by_exp:"note", "note.date | date: '%A, %B %d, %Y'" %}

{% for day in notesByDay reversed %}
<h2>{{ day.name }}</h2>
{% for note in day.items reversed %}
<h3><a href="{{ note.url }}">{{ note.title }}</a></h3>
{{ note.content }}
<hr />
{% endfor %}
{% endfor %}

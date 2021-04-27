---
layout: note
title: Notes
---

{% assign notes = site.notes | sort: 'date' %}
{% for note in notes reversed %}
  <h2><a href="{{ note.url }}">{{ note.title }}</a></h2>
  <br />
  {{ note.content }}
<hr />
{% endfor %}

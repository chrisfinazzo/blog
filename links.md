---
layout: default
---

{% assign links = site.links | sort: 'date' %}
{% for link in links reversed %}
<h2><a href="{{ link.external-url }}">{{ link.title }}</a></h2>
<p class="meta"><time class="dt-published">{{ link.date | date: '%B %-d, %Y' }}</time>&nbsp;<a class="permalink" href="{{ link.url }}">∞</a></p>
{{ link.content }}
<hr />
{% endfor %}

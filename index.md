---
layout: default
---

{% for post in site.posts %}
<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
<div class="meta">{{ post.date | date: "%B %-d, %Y" }}</div>
{{ post.content }}
<hr />
{% endfor %}

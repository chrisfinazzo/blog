---
layout: default
---

{% for post in site.posts %}
<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
<p class="meta">{{ post.date | date: "%B %d, %Y" }}</p>
  {{ post.content }}
<hr />
{% endfor %}

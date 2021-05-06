---
layout: default
---

{% for note in site.notes reversed %}
{% capture currentdate %}{{note.date | date: "%A, %B %d, %Y"}}{% endcapture %}
{% if currentdate != thedate %}
<h2>{{ currentdate }}</h2>
{% capture thedate %}{{currentdate}}{% endcapture %} 
{% endif %}
<h3><a href="{{ note.url }}">{{ note.title }}</a></h3>
{{ note.content }}
<hr />
{% endfor %}

---
layout: default
title: "Reading List"
---

<div class="container">
  {% for entry in site.data.reading %}
  <div class="year-container">
    <div class="year">
      <h4>{{ entry.year }}</h4>
      <div class="number">{{ entry.books | size }} books</div>
    </div>
    <div class="books">
      <ul class="reading-list {{ entry.year }}">
        {% for book in entry.books %}
        <li>
          <a href="{{ book.link }}" alt="_blank" rel="nofollow noopener">{{
            book.title
          }}</a>
          <span class="author">by {{ book.author }}</span>
        </li>
        {% endfor %}
      </ul>
    </div>
  </div>
  {% endfor %}
</div>

---
layout: post
title: Social Distancing Part 3 - A Better Linkblog
---

For as long as I&#8217;ve had a blog of any kind, the idea of quick, short-form writing - sometimes called [linkblogging][] - has been an area of interest. I first remember seeing this concept sometime back in 2006, when I found my way to John Gruber&#8217;s long running site, Daring Fireball. His being the gold standard for this kind of thing, I found myself wanting to do likewise. For interesting articles that I find through RSS or just browsing around the web, it&#8217;s convenient to have an outlet for the stray thought that passes through my mind as I&#8217;m reading.

My first attempt at this idea involved using a link from within the text of a post to the article I was commenting on. Easy enough, but that was different than most other blogs of this style that I read, who used the title to fill that role. Furthermore, Jekyll doesn&#8217;t easily lend itself to that use case without a number of - what I consider to be ugly - modifications to your templates.

Later on, I had a layout where the anchor containing the <code>page.title</code> variable pointed to the link destination, but this was not how the people I was reading built their sites, and more importantly, it was error prone. For a little while, I tried using Jekyll&#8217;s support for [collections][] to get the job done, but this turned out to be no better than juggling destination links and permalinks. Collections are really meant for similar, related items, but other than the fact that these were all links, that didn&#8217;t fit the bill.

This brief trip through history brings me to today and what I hope is a better long term solution. Jekyll supports the [concept][] of a `_data` directory where you can define custom variables and data that can be accessed through Liquid templates. Now, I have a YAML{% fn 1 %} file - naturally, it&#8217;s called links - that can simply be added to as I come across interesting things that I want to write about, but don&#8217;t merit a full post. Each time the site is updated, Jekyll reads the contents of this file and populates the Links page with its contents.

<hr />

[linkblogging]: https://www.manton.org/2016/03/03/the-evolution-of.html

[collections]: https://jekyllrb.com/docs/collections/

[concept]: https://jekyllrb.com/docs/datafiles/

{% footnotes %}
   {% fnbody 1 %}
      <p>Other formats include JSON, CSV, and TSV.</p>
   {% endfnbody %}
{% endfootnotes %}

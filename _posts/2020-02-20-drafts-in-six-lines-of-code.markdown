---
layout: post
title: Drafts in Six Lines of Code
---
A few years ago, I came across a [presentation][]{% fn 1 %} that Brian Kernighan gave back in 2009 called _The Elements of Programming Style_, a title borrowed from his book of the same name. In it, he made one point which I think applies equally well whether you are writing words or code.

> _So, there&#8217;s a balance that you have to find between too clever and - not clever enough - being kind of dim about what you&#8217;re doing_

With this in mind, I took another look at the &#8220;drafts&#8221; script I mentioned in my last post. Thinking about the problem a bit more, I&#8217;ve found that Kernighan&#8217;s observation was precisely the problem I was having all along. Although I could read the script, and understand _what_ it was doing, I didn&#8217;t really grasp _why_.

My knowledge of Make is not very deep and AWK even less so. As I hadn&#8217;t thought about this for some time and it&#8217;s usually easier to deal with the devil you know than the one you don&#8217;t, I ultimately decided to rewrite it in Ruby.

5 minutes of work, 6 lines of code, and (hopefullly) the incentive to write more often.

<hr />

[presentation]: https://www.youtube.com/watch?v=8SUkrR7ZfTA

{% footnotes %}
   {% fnbody 1 %}
      <p>I am always impressed by how &#8220;down to Earth&#8221; Kernighan is every time I hear him speak.</p>
   {% endfnbody %}
{% endfootnotes %}

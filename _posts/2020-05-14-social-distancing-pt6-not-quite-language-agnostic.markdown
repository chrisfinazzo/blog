---
layout: post
title: Social Distancing Part 6 - (Not Quite) Language-Agnostic Interfaces for Words and Code
---

Inspired by Parker&#8217;s [post][] on the same subject, I decided to write my own now that it&#8217;s been up and running for a few days. I say &#8216;not quite&#8217; in the title because - as will become apparent - I only use a few languges to do most of the work.{% fn 1 %} At the end of the process, I had entirely reorganized my Jekyll Scripts repository - now called [Rake Jekyll][] - from a series of shell scripts into a single Rakefile. I also migrated my Reverse Job Posting to use Rake. As I worked, it got me thinking about how I approached the same task in other projects.{% fn 2 %}

[post]: https://byparker.com/blog/2015/language-agnostic-interfaces-for-software-development/

[Rake Jekyll]: https://github.com/chrisfinazzo/rake-jekyll

## Make for the printed word

Makefiles are used to generate output from a number of TeX sources (Redirection FTW). These are simpler and only run the input through a converter - usually [pdfTeX][] or [XeTeX][] - which creates the final PDF. I occasionally run the source text through an app like Pages, which has real grammar and spellcheck functions, just in case [aspell][], Gabe&#8217;s language [module][] or Matt Might&#8217;s [scripts][] miss something. 

[pdfTeX]: https://en.wikipedia.org/wiki/PdfTeX

[XeTeX]: https://en.wikipedia.org/wiki/XeTeX

[aspell]: https://en.wikipedia.org/wiki/GNU_Aspell

[module]: http://www.macdrifter.com/2012/01/custom-grammar-checker-in-bbedit.html

[scripts]: http://matt.might.net/articles/shell-scripts-for-passive-voice-weasel-words-duplicates/

My personal dictionary is pretty well customized and its mode support for TeX is smart enough to figure out what to match on, a handy [feature][] I learned about from Dan Bader. I know there are nearly [endless][] other ways of accomplishing this task, but it&#8217;s the approach I&#8217;ve found that works the best for me.

[feature]: https://dbader.org/blog/spell-checking-latex-documents-with-aspell

[endless]: https://tex.stackexchange.com/questions/42843/is-there-a-spell-check-package-for-latex?noredirect=1&lq=1

## Rake on the web

Rakefiles are just containers for shell sequences - usually with a few modifications and are easy to stick together. For the blog, I can now run `rake draft` to create a draft post on the fly.{% fn 3 %}

In RJP, the default task starts a web server so I can view the output. I tried to do the same thing for the blog, but invoking `bundle exec` in this way returned an error. So, for now this task triggers an incremental build which lands in the `_site` directory.

## Reductio ad Xkcdum

As with any kind of automation, the inevitable question is - usually - &#8216;Did it save time?&#8217;

Well&#8230;maybe. After all, I wrote this post about it while using the tools to get it done. In the end, that&#8217;s what the site is for.

![automation](https://imgs.xkcd.com/comics/automation.png)

<hr />

{% footnotes %}
   {% fnbody 1 %}
      <p>For a while, the working title for this post was &#8216;Glue Code&#8217;, a not-so-subtle reference to the small pieces that do most of the heavy lifting for me.</p>
   {% endfnbody %}
   {% fnbody 2 %}
      <p>Based on the idea of &#8216;Make, now with less typing&#8217; in other projects.</p>
   {% endfnbody %}
   {% fnbody 3 %}
      <p>If I was more versed in Regular Expression syntax, I could try to pass the title argument into the filename, but I havn&#8217;t gotten that far yet.</p>
   {% endfnbody %}
{% endfootnotes %}

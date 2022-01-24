---
layout: post
title: Social Distancing Part 2 - Adventures in Continuous Integration
---

It all sounded so simple.{% fn 1 %} At least this is what I told myself when I decided to move off of my previous host and on to [Netlify][]. It was going to be *great* - almost all of the capabilities of a VPS _for free_, but I didn&#8217;t have to manage it.

This kind of setup is more common these days and works well if you want to get a site up and running quickly without having to fiddle with configuring a server.{% fn 2 %} In my case, I had this blog on DreamHost and an existing microsite (my Reverse Job Posting) over on GitHub Pages but wanted more control over things like HTTP headers and redirects.

Around that time, I watched John Wilander&#8217;s presentation from WWDC 18 and Scott Helme&#8217;s from dotSecurity 2016 and thought, &#8216;I can do this!&#8217;

<div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/8y8NVqFqhTQVa" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/ratatouille-admin-billy-boyd-8y8NVqFqhTQVa"></a></p>

Netlify even has a sandbox environment, called the &#8220;Playground&#8221; where you can test out rules to make sure they work. Take those rules, export them in a [TOML][] file - Netlify&#8217;s format of choice for configuration data - upload it to a domain, and that _should_ be it&#8230;

Not quite. Enter [Content Security Policy][].

_In theory_, the pitch for CSP is awesome. Security configuration changes that are really only a few key-value pairs. You could argue that this is overkill, that for a single page application (no, not [that kind][] - although I do have a [Service Worker][]) it&#8217;s needlessly complicated, but I was too far into &#8220;learning mode&#8221; to think about that, so I pressed on. Problem is, if you don&#8217;t do it correctly, parts of your site will *disappear*{% fn 3 %} and you might not know until it&#8217;s live on the Internet.

In the past, this wasn&#8217;t an issue for me. I ran `make` or `rake` locally, then uploaded the files and that was it. Well, in a CI scenario, that&#8217;s a problem. If, for example, I forgot to run the build task or didn&#8217;t set CSP to `report-only`, raw Markdown might get displayed, things wouldn&#8217;t show up, or the site would refuse to accept changes in a stylesheet.

It was infuriating.

<div style="width:100%;height:0;padding-bottom:64%;position:relative;"><iframe src="https://giphy.com/embed/H4qKN0dHfkZAA" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/technology-dazed-dazedvrt1-H4qKN0dHfkZAA"></a></p>

After many false starts (my repo&#8217;s history for this time period is a mess), and sleeping on the problem for a few days, I _finally_ got this working. Long term, this will allow me to investigate how I can use Netlify&#8217;s AWS Lambda [integration][] to send off a tweet whenever a new post is published.{% fn 4 %}

Ambitious to be sure, especially given how much fumbling about I did at the beginning - but now I&#8217;m halfway there. That&#8217;s a win.

<div style="width:100%;height:0;padding-bottom:81%;position:relative;"><iframe src="https://giphy.com/embed/zaqclXyLz3Uoo" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/zaqclXyLz3Uoo"></a></p>

<hr /> 

{% footnotes %}
   {% fnbody 1 %}
      <p>Famous last words.</p>
   {% endfnbody %}
   {% fnbody 2 %}
      <p>See also - GitHub Pages, Heroku, and Statically</p>
   {% endfnbody %}
   {% fnbody 3 %}
      <p>If you have external scripts from somewhere else, but specify just the default source e.g, &#8216;self&#8217; - only load scripts from my domain - _no matter what you do_, those other resources will refuse to load. It is possible to list a resource as &#8216;none&#8217;, but not loading any URLs of a given type isn&#8217;t all that common.</p>
   {% endfnbody %}
   {% fnbody 4 %}
      <p>From what I can tell, deploying via the CI method is a requirement if you want to use functions.</p>
   {% endfnbody %}
{% endfootnotes %}

[Netlify]: https://www.netlify.com

[TOML]: https://en.wikipedia.org/wiki/TOML

[Content Security Policy]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP

[that kind]: https://en.wikipedia.org/wiki/Single-page_application

[Service Worker]: https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API

[integration]: https://docs.netlify.com/functions/overview/

[GitHub Pages]: https://pages.github.com/

[Heroku]: https://www.heroku.com/

[Statically]: https://statically.io/

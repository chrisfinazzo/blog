---
layout: post
title: Social Distancing Part 5 - IndieWeb, Inside Out
---

So, while writing a function to send a tweet when a new item gets added to feed isn&#8217;t _hard_, it does typically involve a bunch of Javascript. Far more than I&#8217;m comfortable dealing with at this point.

In the past, I might have used something like Erik Berlin&#8217;s [twitter][] gem and built a tiny client to do this myself. I&#8217;m more comfortable with Ruby - at least to the point I can read the code and figure out how a project is put together - something I really can&#8217;t say about Node or Javascript. Still, that&#8217;s probably more of distraction compared to what I really want to do which is write.

Kind of stuck at this point, I started thinking, &#8216;there&#8217;s got to be an easier way&#8217;. It turns out{% fn 1 %} I already knew what needed to be done. However, as Jekyll is kind of the [OG][] of static site generators, getting this kind of IndieWeb functionally (specifically, [POSSE][]) into the site required a bit of additional finesse.

## [Why Don&#8217;t We Do It (on the Server)?][]

At first, I tried IFTTT. This was by far the easiest to set up. Just provide the URL of a feed to an applet and it will tweet new items on your behalf as they get added to the site. It does the job, and the results are nicely formatted, but it&#8217;s the equivalent of a black box. If IFTTT changes how applets talk to services or the developer who made it loses interest, there&#8217;s no guarantee it will continue working.{% fn 2 %}

Enter [Bridgy][], a service I remember reading about a while back but hadn&#8217;t looked at in a serious way for some time. From the site&#8217;s FAQ:

> _Bridgy periodically checks social networks for responses to your posts and links to your web site and sends them back to your site as webmentions. Bridgy also translates the responses to microformats so that your web site can fetch and parse them. Bridgy can also publish posts, comments, likes, and retweets from your web site to social networks. When you ask Bridgy to publish a post, it analyzes its microformats data and publishes it using the social network APIs._

This means I can add a [webmention][]{% fn 3 %} endpoint to my post template and when it is published, Bridgy will hit the Twitter API and send a tweet for me. I had previously set up - but never actually used - a separate Twitter account for this purpose - an idea I got from Casey Liss&#8217; engine, [Camel][]. However, I&#8217;ve found that implementing [micropub][] style posting (think Twitter, or for the more technically inclined, Mastodon or Micro.blog) is easier if it all uses the same account.

## Unfinished

While this is a good start, it&#8217;s not finished yet. The web interface to Bridgy gives you a POST request that will actually send the webmention, but for some reason, although I included the Twitter URL - from Bridgy - in my template, a tweet containing a link back to my post wasn&#8217;t showing up when I first tried to use this setup. As a result, there&#8217;s a tiny script - called `webmention.sh` - which uses curl to talk to Bridgy, which goes and pings Twitter.

Ideally, I would like to automate this step, which would allow me to re-enable autopublishing in Netlify. At that point, all that would be required to tweet new items from the feed would be a `git push`. [Webmention.app][] seems like the best option for my purposes and I&#8217;ve done some testing with it for a few days. It integrates with Netlify&#8217;s webhooks feature so I can send a webmention automatically when each deploy succeeds.{% fn 4 %}

It would also mean I don&#8217;t need to hand-edit my script to add the URL of each new post. I just need to figure out how the POST request should be formatted and it should be ready to go.

<hr />

{% footnotes %}
   {% fnbody 1 %}
    <p>Merlin.</p>
   {% endfnbody %}
   {% fnbody 2 %}
    <p>Another argument in favor of, &#8216;If you want something done, do it yourself.&#8217;</p>
   {% endfnbody %}
   {% fnbody 3 %}
    <p>Aaron Parecki&#8217;s session from IndieWebCamp last year is a great place to start if you want to get an overview of what webmentions are and how to use them.</p>
   {% endfnbody %}
   {% fnbody 4 %}
  <p>Remy Sharp, who runs the service, along with users in the Netlify Community forum have been remarkably patient to answer silly questions from me as they come up, which has been helpful as I try to get this working right.
</p>
   {% endfnbody %}
{% endfootnotes %}


[twitter]: https://github.com/sferik/twitter

[Why Don&#8217;t We Do It (on the Server)?]: https://en.wikipedia.org/wiki/Why_Don%27t_We_Do_It_in_the_Road%3F

[OG]: https://www.urbandictionary.com/define.php?term=OG

[IndieWeb]: https://indieweb.org

[POSSE]: https://indieweb.org/POSSE

[Bridgy]: https://brid.gy

[webmention]: https://indieweb.org/Webmention

[Camel]: https://github.com/cliss/camel

[micropub]: https://indieweb.org/Micropub

[Webmention.app]: https://webmention.app

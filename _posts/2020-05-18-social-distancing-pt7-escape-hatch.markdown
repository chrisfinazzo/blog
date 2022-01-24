---
layout: post
title: Social Distancing Part 7 - Escape Hatch
---

It all started because of a failed Python [upgrade][]. I began to wonder if I would be forced into an OS upgrade just to get Homebrew to behave - on a six year old machine - that isn&#8217;t anyone&#8217;s idea of a good time.{% fn 1 %}

Now, I&#8217;ll admit, I have an slightly irrational dislike for all things Python, even as it has grown in popularity thorough being the tool of choice in fields like [Data science][]. The primary reason for it has almost everything to do with the environment. Compared with the Ruby equivalent - rbenv - the Python equivalents are still too fiddly for my taste. Although progress has been made over several years by Ken Reitz and others working on the language proper, in my experience it still{% fn 2 %} requires some manual setup to get working right.

As the best way to figure all of this out is to try it, I took another look at making a [dotfiles][] repo to contain some of this chaos. Like many people in a similar situation, I started on Bash and [moved][] to Zsh right before getting Mojave up and running, which will make the transition to Catalina - and whatever comes after it - easier. It&#8217;s made from scratch without the need for frameworks like [ohmyzsh][] or [prezto][] and fairly straightforward.{% fn 3 %}

To my surprise, I found by [testing][] it, the dependencies in my Brewfile were upgraded to the point that the then-current Python was installed as well.

<div style="width:100%;height:0;padding-bottom:75%;position:relative;"><iframe src="https://giphy.com/embed/y6Lgj4yTpMmZO" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/tiger-woods-y6Lgj4yTpMmZO"></a></p>

It should come in handy when I get my next [machine][]. I originally planned on doing this as soon as the new 13&#8221; MacBook Pro was released, but COVID-19 scuttled those plans, so I&#8217;m waiting until the shipping times are back to something approaching normal - whenever that is - before making a purchase.

<hr />

{% footnotes %}
   {% fnbody 1 %}
      <p>I did eventually upgrade to Mojave, but when the time came to do so, it was motivated by larger concerns - e.g, the potential loss of security updates if I stayed on High Sierra.</p>
   {% endfnbody %}
   {% fnbody 2 %}
      <p>The appearance of pipenv in official documentation is a really good sign&#8230;until you scroll down and see that virtualenv is still hanging on, a vestige of a different age.</p>
   {% endfnbody %}
   {% fnbody 3 %}
      <p>A Brewfile, global `.gitconfig`/`.gitignore` files, a `.hushlogin`, and - last but not least - my `.zshrc`, which contains aliases and a couple of functions alongside my configuration.</p>
   {% endfnbody %}
{% endfootnotes %}

[upgrade]: https://github.com/Homebrew/homebrew-core/issues/38213

[Data science]: https://en.wikipedia.org/wiki/Data_science

[dotfiles]: https://dotfiles.github.io

[moved]: https://chrisfinazzo.com/2020/04/07/social-distancing-pt1-hello-zsh/

[ohmyzsh]: https://ohmyz.sh

[prezto]: https://github.com/sorin-ionescu/prezto

[testing]: https://twitter.com/chrisfinazzo/status/1100065027887951873

[machine]: https://www.apple.com/macbook-pro-13/

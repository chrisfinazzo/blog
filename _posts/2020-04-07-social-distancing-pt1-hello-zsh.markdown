---
layout: post
title: Social Distancing Part 1 - Hello, Zsh! 
---

**_This is what (I hope) will be a series of posts about what I&#8217;m doing to keep my mind occupied while practicing COVID-19 induced [social distancing][]. When you work for a public library (but are closed to the public), just about everything slows to a crawl._**

The writing is on the wall for Bash in macOS. It&#8217;s really old, and probably won&#8217;t be updated because of terms set forth in the GPL Version 3.{% fn 1 %}

(Read: Lawyers)

If you are sufficiently determined, you _can_ upgrade to Bash 5 - but you&#8217;re on your own should you decide to go that route. The default shell in Catalina is now Zsh, and if you launch Bash on a Mac running 10.15, you&#8217;ll get this friendly message:{% fn 2 %}

> <code>The default interactive shell is now zsh.
To update your account to use zsh, please run `chsh -s /bin/zsh`.
For more details, please visit https://support.apple.com/kb/HT208050.</code>

In my case, a combination of Apple&#8217;s [instructions][], Armin&#8217;s [book][] and a handful of Twitter conversations was enough to make it through this transition. My setup isn&#8217;t that complicated and making the move now means some of the privacy related changes in macOS will be easier to digest before I even encounter Catalina.{% fn 3 %}

Having my [configuration][] backed up doesn&#8217;t hurt either.

<hr />

[social distancing]: https://www.hopkinsmedicine.org/health/conditions-and-diseases/coronavirus/coronavirus-social-distancing-and-self-quarantine

[instructions]: https://support.apple.com/en-us/HT208050

[book]: https://scriptingosx.com/2019/11/new-book-release-day-moving-to-zsh/

[configuration]: https://github.com/chrisfinazzo/dotfiles

{% footnotes %}
   {% fnbody 1 %}
      <p>It&#8217;s licensed under the GPL Version 2, but the program itself is now at version 3.2. That&#8217;s not confusing at all.</p>
   {% endfnbody %}
   {% fnbody 2 %}
       <p>You may choose to suppress this warning using the command <code>export BASH_SILENCE_DEPRECATION_WARNING=1</code> but honestly, doing that feels like fighting the old war.</p>
   {% endfnbody %}
   {% fnbody 3 %}
       <p>Backblaze, BBEdit, Terminal, and Transmit get Full Disk Access to preempt an avalanche of security dialogs.</p>
   {% endfnbody %}
{% endfootnotes %}

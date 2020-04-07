---
layout: post
title: Social Distancing Part 1 - Hello, Zsh! 
---

**_This is what (I hope) will be a series of posts about what I&#8217;m doing to keep my mind occupied while practicing COVID-19 induced [social distancing][]. When you work for a public library (but are closed to the public), just about everything slows to a crawl._**

The writing is on the wall for Bash in macOS. It&#8217;s really old, and probably won&#8217;t be updated because of terms set forth in the GPL Version 3.[^1]

(Read: Lawyers)

If you are sufficiently determined, you _can_ upgrade to Bash 5 - but you&#8217;re on your own should you decide to go that route. The default shell in Catalina is now Zsh, and if you launch Bash on a Mac running 10.15, you&#8217;ll get this friendly message[^2]:

> ```
The default interactive shell is now zsh.
To update your account to use zsh, please run `chsh -s /bin/zsh`.
For more details, please visit https://support.apple.com/kb/HT208050.
```

In my case, a combination of Apple&#8217;s [instructions][], Armin&#8217;s [book][] and a handful of Twitter conversations was enough to make it through this transition. My setup isn&#8217;t that complicated and making the move now means some of the privacy related changes in macOS will be easier to digest before I even encounter Catalina.[^3]

Having my [configuration][] backed up doesn&#8217;t hurt either.

<hr />

[social distancing]: https://www.hopkinsmedicine.org/health/conditions-and-diseases/coronavirus/coronavirus-social-distancing-and-self-quarantine

[instructions]: https://support.apple.com/en-us/HT208050

[book]: https://scriptingosx.com/2019/11/new-book-release-day-moving-to-zsh/

[configuration]: https://github.com/chrisfinazzo/dotfiles

[^1]: It&#8217;s _licensed_ under the GPL Version 2, but the _program_ itself is now at version 3.2. That&#8217;s not confusing _at all_.

[^2]: Feel free suppress this warning with `export BASH_SILENCE_DEPRECATION_WARNING=1`, but honestly, that feels like fighting the old war.

[^3]: Backblaze, BBEdit, Terminal, and Transmit get Full Disk Access to preempt an [avalanche](https://cdn.tyler.io/wp-content/uploads/2019/10/8DF8764D-61E2-49BC-8548-8A864EAF3F9F.jpeg) of security dialogs.
